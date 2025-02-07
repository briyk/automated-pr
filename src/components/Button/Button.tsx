import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const getButtonStyles = (variant: ButtonVariant = 'primary') => {
  const styles = {
    primary: css`
      background: #3182ce;
      color: white;
      border: none;
      &:hover:not(:disabled) {
        background: #2b6cb0;
      }
    `,
    secondary: css`
      background: #718096;
      color: white;
      border: none;
      &:hover:not(:disabled) {
        background: #4a5568;
      }
    `,
    outline: css`
      background: transparent;
      color: #3182ce;
      border: 2px solid #3182ce;
      &:hover:not(:disabled) {
        background: #ebf8ff;
      }
    `,
    ghost: css`
      background: transparent;
      color: #3182ce;
      border: none;
      &:hover:not(:disabled) {
        background: #ebf8ff;
      }
    `,
  };

  return styles[variant];
};

const getButtonSize = (size: ButtonSize = 'medium') => {
  const sizes = {
    small: css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `,
    medium: css`
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `,
    large: css`
      padding: 1rem 2rem;
      font-size: 1.125rem;
    `,
  };

  return sizes[size];
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.2s;
  cursor: pointer;
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};

  ${(props) => getButtonStyles(props.variant)}
  ${(props) => getButtonSize(props.size)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const LoadingSpinner = styled.div<{ hasChildren?: boolean }>`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
  margin-right: ${(props) => props.hasChildren ? '0.5rem' : '0'};
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      isLoading = false,
      isFullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <LoadingSpinner hasChildren={Boolean(children)} />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
