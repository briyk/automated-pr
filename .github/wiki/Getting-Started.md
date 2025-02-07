# Getting Started with Automated PR Reviews

This guide will help you get started with our automated PR review system.

## 🔑 Prerequisites

1. **API Keys**
   - GitHub Token
   - OpenAI API Key
   - Qodo API Key

2. **Repository Setup**
   - Enable GitHub Actions
   - Configure repository secrets
   - Enable branch protection rules

## 🚀 Quick Start

1. **Set up your environment**
   ```bash
   # Clone the repository
   git clone <repository-url>
   cd automated-pr

   # Copy environment example
   cp .env.example .env
   ```

2. **Configure API Keys**
   - Go to repository Settings > Secrets and variables > Actions
   - Add your API keys:
     - `OPENAI_API_KEY`
     - `QODO_API_KEY`
     - `GITHUB_TOKEN` (automatically provided)

3. **Create your first PR**
   ```bash
   # Create a new branch
   git checkout -b feature/my-feature

   # Make changes
   # ...

   # Commit and push
   git add .
   git commit -m "feat: my new feature"
   git push origin feature/my-feature
   ```

4. **Use PR Review Commands**
   ```bash
   # In PR comments:
   @qodo /review     # Request full review
   @qodo /suggest    # Get code suggestions
   @qodo /describe   # Generate PR description
   ```

## 🔍 Understanding Review Output

The automated review will provide:
1. Code quality feedback
2. Best practice suggestions
3. Security recommendations
4. Performance improvements
5. Type safety checks

## 🛠 Customization

You can customize the review process by modifying:
1. `.pr_agent.toml` - Review rules and bot behavior
2. `.github/workflows/pr_agent.yml` - Workflow configuration
3. `best_practices.md` - Project-specific guidelines

## 📚 Next Steps

1. Read our [Best Practices](Best-Practices) guide
2. Check the [PR Review Process](PR-Review-Process)
3. Learn about [Code Quality Standards](Code-Quality-Standards)
4. Review [Troubleshooting](Troubleshooting) tips
