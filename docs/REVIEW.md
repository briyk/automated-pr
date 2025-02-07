# Pull Request Review Guide

## Overview
This document outlines our PR review process using Qodo AI and best practices for both reviewers and contributors.

## Review Process

### 1. Automated Review
When you create a PR, several automated checks will run:
- Qodo AI PR Review
- Code quality analysis
- Best practices verification
- Security scanning

### 2. Review UI Access
To see the review UI:
1. Install the Qodana Chrome extension
2. Wait for PR checks to complete
3. Click "Details" on the Qodo AI PR Review check
4. Use the extension to view inline suggestions

### 3. Configuration Files
Important configuration files:
- `.pr_agent.toml`: PR agent settings
- `.github/workflows/pr_agent.yml`: GitHub Actions workflow
- `best_practices.md`: Coding standards
- `.github/PULL_REQUEST_TEMPLATE.md`: PR template

### 4. Required Setup
1. **API Keys**:
   - Set `QODO_API_KEY` in repository secrets
   - Set `OPENAI_API_KEY` in repository secrets
   - Ensure `GITHUB_TOKEN` has proper permissions

2. **Branch Requirements**:
   - PRs must target `main` or `develop` branches
   - Branch names should follow convention: `feature/`, `bugfix/`, `hotfix/`

### 5. Review Process
1. Create PR following template
2. Wait for automated checks
3. Review Qodo AI suggestions
4. Address feedback
5. Request human review if needed
6. Merge when approved

## Best Practices

### For Contributors
1. Follow PR template
2. Keep changes focused
3. Include tests
4. Update documentation
5. Respond to automated suggestions
6. Link related issues

### For Reviewers
1. Use Chrome extension
2. Review automated suggestions
3. Check code quality
4. Verify tests
5. Ensure documentation
6. Validate security

## Troubleshooting

### Common Issues
1. **UI Not Showing**:
   - Verify Chrome extension installation
   - Check if checks completed
   - Refresh PR page
   - Clear browser cache

2. **Checks Failed**:
   - Check API keys
   - Verify branch naming
   - Review error logs
   - Update configuration files

3. **Extension Issues**:
   - Reinstall extension
   - Sign out/in
   - Check permissions
   - Update extension

## Additional Resources
- [Qodana Documentation](https://www.jetbrains.com/help/qodana/getting-started.html)
- [PR Agent Configuration](https://github.com/qodo-ai/pr-agent)
- [Best Practices Guide](./best_practices.md)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)