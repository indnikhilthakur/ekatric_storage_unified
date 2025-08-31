import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Animated,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.75;

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarAnimation] = useState(new Animated.Value(-SIDEBAR_WIDTH));

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      Animated.timing(sidebarAnimation, {
        toValue: -SIDEBAR_WIDTH,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(sidebarAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigationItems = [
    { id: 1, title: 'Dashboard', icon: 'home-outline', active: true },
    { id: 2, title: 'Storage', icon: 'folder-outline', active: false },
    { id: 3, title: 'Analytics', icon: 'analytics-outline', active: false },
    { id: 4, title: 'Settings', icon: 'settings-outline', active: false },
    { id: 5, title: 'Profile', icon: 'person-outline', active: false },
    { id: 6, title: 'Help', icon: 'help-circle-outline', active: false },
  ];

  const renderSidebarItem = (item: any) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.sidebarItem, item.active && styles.sidebarItemActive]}
      onPress={() => {
        // Handle navigation here
        console.log(`Navigating to ${item.title}`);
      }}
    >
      <Ionicons 
        name={item.icon as any} 
        size={24} 
        color={item.active ? '#007AFF' : '#666'} 
      />
      <Text style={[styles.sidebarItemText, item.active && styles.sidebarItemTextActive]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ekatric Storage</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <ScrollView style={styles.contentScroll}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Welcome to Ekatric Storage</Text>
            <Text style={styles.welcomeSubtitle}>
              Your unified storage solution for all your data needs
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons name="folder" size={32} color="#007AFF" />
              <Text style={styles.statNumber}>1,234</Text>
              <Text style={styles.statLabel}>Total Files</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="cloud" size={32} color="#34C759" />
              <Text style={styles.statNumber}>2.5 GB</Text>
              <Text style={styles.statLabel}>Storage Used</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="trending-up" size={32} color="#FF9500" />
              <Text style={styles.statNumber}>89%</Text>
              <Text style={styles.statLabel}>Efficiency</Text>
            </View>
          </View>

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <View style={styles.activityItem}>
              <Ionicons name="document-text" size={20} color="#007AFF" />
              <Text style={styles.activityText}>Document.pdf uploaded</Text>
              <Text style={styles.activityTime}>2 min ago</Text>
            </View>
            <View style={styles.activityItem}>
              <Ionicons name="image" size={20} color="#34C759" />
              <Text style={styles.activityText}>Photo.jpg shared</Text>
              <Text style={styles.activityTime}>15 min ago</Text>
            </View>
            <View style={styles.activityItem}>
              <Ionicons name="folder" size={20} color="#FF9500" />
              <Text style={styles.activityText}>Project folder created</Text>
              <Text style={styles.activityTime}>1 hour ago</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Sidebar */}
      <Animated.View 
        style={[
          styles.sidebar, 
          { transform: [{ translateX: sidebarAnimation }] }
        ]}
      >
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarTitle}>Navigation</Text>
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.sidebarContent}>
          {navigationItems.map(renderSidebarItem)}
        </ScrollView>

        <View style={styles.sidebarFooter}>
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Overlay */}
      {isSidebarOpen && (
        <TouchableOpacity 
          style={styles.overlay} 
          onPress={toggleSidebar}
          activeOpacity={1}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  menuButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  profileButton: {
    padding: 8,
  },
  mainContent: {
    flex: 1,
  },
  contentScroll: {
    flex: 1,
    padding: 20,
  },
  welcomeSection: {
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  recentSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  activityText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1000,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingTop: 60,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  closeButton: {
    padding: 8,
  },
  sidebarContent: {
    flex: 1,
    paddingTop: 20,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 8,
  },
  sidebarItemActive: {
    backgroundColor: '#F0F8FF',
  },
  sidebarItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  sidebarItemTextActive: {
    color: '#007AFF',
    fontWeight: '500',
  },
  sidebarFooter: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
    marginLeft: 12,
    fontWeight: '500',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
});
