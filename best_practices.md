# React + TypeScript Best Practices

## Code Organization

### Project Structure
```
src/
  ├── assets/        # Static files like images, fonts
  ├── components/    # Reusable UI components
  ├── hooks/         # Custom React hooks
  ├── pages/         # Route components
  ├── services/      # API and external service integrations
  ├── store/         # State management
  ├── types/         # TypeScript type definitions
  ├── utils/         # Helper functions
  └── App.tsx        # Root component
```

### Component Best Practices

1. **Use TypeScript Properly**
   - Define proper interfaces for props
   - Avoid using `any` type
   - Use proper return types for functions
   ```typescript
   interface UserProps {
     name: string;
     age: number;
     onUpdate: (id: string) => void;
   }
   ```

2. **Component Structure**
   - Use functional components with hooks
   - Keep components small and focused
   - Extract reusable logic into custom hooks
   ```typescript
   const UserProfile: React.FC<UserProps> = ({ name, age, onUpdate }) => {
     // Component logic
   };
   ```

3. **State Management**
   - Use appropriate React hooks (useState, useReducer)
   - Consider context for global state
   - Avoid prop drilling

4. **Performance**
   - Use React.memo for expensive renders
   - Implement proper dependency arrays in useEffect
   - Use lazy loading for routes
   ```typescript
   const LazyComponent = React.lazy(() => import('./Component'));
   ```

## Testing Guidelines

1. **Unit Tests**
   - Test component rendering
   - Test user interactions
   - Test custom hooks
   ```typescript
   test('component renders correctly', () => {
     render(<Component />);
     expect(screen.getByText('Hello')).toBeInTheDocument();
   });
   ```

2. **Integration Tests**
   - Test component interactions
   - Test data flow
   - Test routing

## Code Quality

1. **ESLint Rules**
   - Follow project ESLint configuration
   - No unused variables
   - Consistent code style

2. **Documentation**
   - Document complex logic
   - Add JSDoc comments for functions
   - Keep README updated

## Git Workflow

1. **Commits**
   - Use conventional commits
   - Keep commits focused
   - Write meaningful commit messages

2. **Pull Requests**
   - Include description of changes
   - Link related issues
   - Add necessary labels
   - Request appropriate reviewers

## Vite Specific

1. **Environment Variables**
   - Use `VITE_` prefix
   - Keep sensitive data in `.env.local`
   - Document required variables

2. **Build Optimization**
   - Use dynamic imports
   - Optimize asset imports
   - Configure proper chunks

## Security

1. **Data Handling**
   - Sanitize user inputs
   - Use HTTPS for API calls
   - Implement proper authentication

2. **Dependencies**
   - Regular security updates
   - Audit dependencies
   - Use exact versions