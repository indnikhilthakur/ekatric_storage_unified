# Ekatric Storage - Sidebar Template

A modern React Native app template with a beautiful animated sidebar navigation, built with Expo.

## ✨ Features

- **Animated Sidebar Navigation** - Smooth slide-in/out animations
- **Modern UI Design** - Clean, professional interface with cards and shadows
- **Responsive Layout** - Adapts to different screen sizes
- **Interactive Elements** - Touch-friendly navigation items
- **Statistics Dashboard** - Sample data visualization cards
- **Recent Activity Feed** - Timeline of user actions
- **Professional Styling** - Consistent color scheme and typography

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Expo CLI
- Expo Go app on your mobile device

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Scan the QR code with Expo Go on your device

## 📱 App Structure

### Header
- **Menu Button** - Toggles the sidebar
- **App Title** - "Ekatric Storage"
- **Profile Button** - Quick access to user profile

### Main Content
- **Welcome Section** - App introduction and description
- **Statistics Cards** - Key metrics display (Files, Storage, Efficiency)
- **Recent Activity** - Timeline of recent actions

### Sidebar Navigation
- **Dashboard** - Main overview (active by default)
- **Storage** - File management
- **Analytics** - Data insights
- **Settings** - App configuration
- **Profile** - User account
- **Help** - Support and documentation
- **Logout** - Sign out option

## 🎨 Customization

### Colors
The app uses a consistent color palette:
- **Primary Blue**: #007AFF
- **Success Green**: #34C759
- **Warning Orange**: #FF9500
- **Error Red**: #FF3B30
- **Background**: #F8F9FA
- **Text Primary**: #333
- **Text Secondary**: #666

### Styling
- **Shadows**: Subtle elevation effects for cards
- **Border Radius**: 12px for cards, 8px for buttons
- **Typography**: Clear hierarchy with different font weights
- **Spacing**: Consistent 20px padding and margins

## 🔧 Development

### Adding New Navigation Items
```typescript
const navigationItems = [
  // ... existing items
  { id: 7, title: 'New Feature', icon: 'star-outline', active: false },
];
```

### Customizing Icons
The app uses Ionicons from Expo Vector Icons. Browse available icons at:
https://ionic.io/ionicons

### Adding New Sections
```typescript
<View style={styles.newSection}>
  <Text style={styles.sectionTitle}>New Section</Text>
  {/* Your content here */}
</View>
```

## 📱 Platform Support

- ✅ **Android** - Full support with Expo Go
- ✅ **iOS** - Full support with Expo Go
- ✅ **Web** - Responsive web version
- ✅ **Expo Go** - Instant testing without build

## 🚀 Next Steps

1. **Customize Content** - Replace sample data with real content
2. **Add Navigation Logic** - Implement actual page routing
3. **Connect to Backend** - Integrate with your storage API
4. **Add Authentication** - Implement user login/logout
5. **Customize Theme** - Adjust colors and styling to match your brand

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/)

## 🤝 Contributing

Feel free to customize this template for your needs. The code is structured for easy modification and extension.

---

**Built with ❤️ using React Native & Expo**
