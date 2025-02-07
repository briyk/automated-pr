

## 🤖 PR Review Features

This repository uses Qodo Merge for automated PR reviews. Here's how to use the features:

### Available Commands

When creating or reviewing PRs, you can use these commands as comments:

1. **Get PR Description**
   ```
   @qodo /describe
   ```
   Generates a detailed PR description with changes overview, technical details, and testing information.

2. **Code Review**
   ```
   @qodo /review
   ```
   Performs a comprehensive code review checking for best practices, potential issues, and improvements.

3. **Ask Questions**
   ```
   @qodo explain this change
   ```
   Ask questions about specific code changes or implementation details.

4. **Get Suggestions**
   ```
   @qodo /suggest
   ```
   Receives code improvement suggestions with actual code examples.

5. **Find Similar Issues**
   ```
   @qodo /similar_issues
   ```
   Finds similar issues or PRs in the repository.

6. **Security Check**
   ```
   @qodo /security
   ```
   Performs security analysis of the changes.

7. **Effort Estimation**
   ```
   @qodo /estimate
   ```
   Estimates the effort and complexity of the changes.

### Automatic Features

The following features run automatically on each PR:

- 🏷 Automatic labeling based on changes
- 📝 Inline code review comments
- 🔍 Code quality suggestions
- 🛡 Security scanning
- 📊 Effort estimation

### Best Practices

1. **Creating PRs**
   - Write a clear title describing the change
   - Use `/describe` to get a comprehensive PR description
   - Request review using `/review`

2. **Reviewing PRs**
   - Check the automated review comments
   - Use `/suggest` for specific improvements
   - Ask questions using `@qodo explain`

3. **Before Merging**
   - Ensure all automated checks pass
   - Address security concerns highlighted by `/security`
   - Review and implement suggested improvements

### Configuration

PR review settings are configured in `.pr_agent.toml`. Key features include:
- TypeScript and React best practices
- Component patterns review
- Performance considerations
- Security scanning
- Dependency analysis
