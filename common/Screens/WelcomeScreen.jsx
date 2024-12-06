import {Image, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../helpers/common';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {FadeInDown} from 'react-native-reanimated';
import { theme } from '../constants/theme';
export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image
        source={require('../assets/welcome1.png')}
        style={styles.bgImage}
        resizeMode="cover"
      />

      {/* Linear Gradient  */}

      <Animated.View entering={FadeInDown.duration(600)} style={{flex: 1}}>
        <LinearGradient
          style={styles.linearGradient}
          colors={[
            'rgba(255,255,255,0)',
            'rgba(255,255,255,0.5)',
            'white',
            'white',
          ]}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 0.8}}
        />
      
      <View style={styles.contentContainer}>
        <Animated.Text style={styles.title}
        entering={FadeInDown.delay(400).springify()}>
          Lovey Duby
        </Animated.Text>
        <Animated.Text style={styles.punchLine}
        entering={FadeInDown.delay(500).springify()}
        >
          Every Memory is Beautiful as You
        </Animated.Text>
        <Animated.View entering={FadeInDown.delay(600).springify()}>
          <Pressable style={styles.startButton}>
            <Text style={styles.startText}>
              Start Explore
            </Text>
          </Pressable>
        </Animated.View>
      </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  linearGradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: 'absolute',
  },
  contentContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    gap:14,
  },
  title:{
    fontSize:hp(5),
    fontWeight:theme.fontWeights.bold,
    color:theme.colors.neutral(0.9)
  },
  punchLine:{
    fontSize:hp(2),
    marginBottom:10,
    letterSpacing:1,
    fontWeight:theme.fontWeights.medium
  },
  startButton:{
    marginBottom:50,
    backgroundColor:theme.colors.neutral(0.9),
    paddingHorizontal:90,
    padding:15,
    borderRadius:theme.radius.xl,
    borderCurve:'continuous'
  },
  startText:{
    color:theme.colors.white,
    letterSpacing:2,
    fontSize:hp(3),
    fontWeight:theme.fontWeights.medium,
  }
});
