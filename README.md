### Javascript + React Style Guides
1. https://reactpatterns.com/
2. https://github.com/airbnb/javascript

### Commit Conventions
1. https://www.conventionalcommits.org/ (try to follow)
2. https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits (helpful vscode extension)

**format:**
```
type(scope): short 50/60 chars title
100/200 chars description (good to have)
#PR
```

**examples:**

```
fix: array parsing issue when multiple spaces were contained in string.

Explain what was the issue and what you've done to resolve the issue
#PR-1
```

```
feat(dashboard): when user scrolls to bottom start loading animation

Explain what was the issue and what you've done to resolve the issue
#PR-2
```

```
hotfix: catch 401 errors on token expire to avoid ui crash

Explain what was the issue and what you've done to resolve the issue
#PR-2
```

### Component Conventions
1. Prefix page with components **'Page'** e.g. DashboardPage, CheckoutPage
2. Prefix ui component with **'Component'** e.g. WishlistComponent, UserReviewsComponent
3. Separate component file names by dash e.g. product-pricing-card not understore
4. Try not to go over 500 lines

### Folder Structure Overview
```bash
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   ├── locales
│   │   └── styles
│   │   └── svgs
│   ├── components
│   │   ├── common
│   │   ├── feature
│   ├── contexts
│   │   └── auth.js
│   ├── hooks
│   │   └── useAuth.js
│   ├── network
│   │   └── http.js
│   │   └── endpoints.js
│   │   └── middlewares.js
│   ├── screens
│   │   ├── dasbhoard
│   │   │   └── dashboard.module.scss
│   │   │   └── index.js
│   │   ├── products
│   │   │   └── products.module.scss
│   │   │   └── index.js
│   ├── store
│   │   ├── auth.js
│   │   ├── index.js
│   ├── utils
│   │   ├── env.js
│   │   ├── permissions.js
│   │   ├── validations.js
```
