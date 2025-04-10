# 📦 Currency List SDK

A cross-platform SDK (React Native, Android, iOS) for accessing currency lists and related currency data.

## 🚀 Features

- ✅ Supports React Native (TypeScript)
- 🤖 Native Android (Kotlin) integration
- 🍎 Native iOS (Swift) integration
- 📱 Example app for demo and testing
- 🧪 Built-in unit tests with Jest
- ⚙️ CI-ready with GitHub Actions

---

## 🧰 Installation

```bash
# Install via npm (for React Native usage)
npm install react-native-currency-list
Or
yarn add react-native-currency-list
```

Or clone and link manually for native integration or development.

---

## 📱 Usage (React Native)

```tsx
import React from "react";
import CurrencyListModule from "react-native-currency-list";
import {useCurrency} from "../../context/currencyContext";

const CurrencyListScreen = () => {
  const {data} = useCurrency();
  return <CurrencyListModule metadata={{data}} />;
};

export {CurrencyListScreen};
```

> For more usage examples, check the `example/` directory.

---

## 🛠 Native Setup

### Android

1. Navigate to `android/`
2. Integrate module in your Android app as per standard library setup
3. Make sure to include required permissions and dependencies

### iOS

1. Navigate to `ios/`
2. Open in Xcode and add as a framework or local pod
3. Ensure Swift support is enabled in your RN project

---

## 🧪 Testing

```bash
npm test
```

- Test framework: Jest
- Configurations:
  - `jest.config.js`
  - `jest.setup.js`

---

## 📂 Project Structure

```
├── android/         # Android native module (Kotlin)
├── ios/             # iOS native module (Swift)
├── src/             # TypeScript logic for RN
├── lib/             # Shared utilities or core logic
├── example/         # Sample React Native app
├── .github/workflows/ # CI setup
```

---

## 🔧 Scripts

```bash
# Run tests
yarn run test

# Lint code
yarn run lint
```

---

## 📄 License

MIT © 2025 Arian Shi
