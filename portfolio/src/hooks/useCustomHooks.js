import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for intersection observer to detect when elements enter viewport
 * Useful for triggering animations and lazy loading
 */
export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            if (entry.isIntersecting && !hasIntersected) {
                setHasIntersected(true);
            }
        }, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options,
        });

        observer.observe(target);

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [hasIntersected, options]);

    return { targetRef, isIntersecting, hasIntersected };
};

/**
 * Custom hook for smooth scrolling with offset for fixed headers
 */
export const useSmoothScroll = () => {
    const scrollToElement = (elementId, offset = 80) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return { scrollToElement };
};

/**
 * Custom hook to detect if user has scrolled past a certain threshold
 */
export const useScrollPosition = (threshold = 50) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > threshold;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled, threshold]);

    return scrolled;
};

/**
 * Custom hook for form validation
 */
export const useFormValidation = (initialValues, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const handleSubmit = async (callback) => {
        setIsSubmitting(true);
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            await callback(values);
        }

        setIsSubmitting(false);
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        setIsSubmitting,
    };
};

/**
 * Custom hook for detecting click outside an element
 */
export const useClickOutside = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [callback]);

    return ref;
};

/**
 * Custom hook for debouncing values
 */
export const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
};
