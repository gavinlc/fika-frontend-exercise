module.exports = { 
    moduleNameMapper: {
        'react-dotenv': '<rootDir>/__mocks__/react-dotenv.tsx'
      },
      transformIgnorePatterns: ["node_modules/(?!react-dotenv)"],
}