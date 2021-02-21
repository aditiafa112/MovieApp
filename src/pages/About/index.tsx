import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import {ILLITSME} from '../../assets/illustration';
import {
  IconGmail,
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconDribbble,
  IconMedium,
} from '../../assets/icon';
import {TopBar} from '../../components';
import {colors, fonts} from '../../utils';
import {social} from '../../config/data';
import Clipboard from '@react-native-clipboard/clipboard';
import {TouchableOpacity} from 'react-native-gesture-handler';

const About = () => {
  const copyToClipboard = (url: any) => {
    Clipboard.setString(url);
    Alert.alert('Copied to clipboard: ', url);
  };

  return (
    <View style={styles.page}>
      <TopBar />
      <View style={styles.body}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profileWrapper}>
              <Image source={ILLITSME} style={styles.profile} />
            </View>
            <Text style={styles.profileName}>Aditia Falacha Arvin</Text>
            <Text style={styles.profileJob}>Front End Engginer</Text>
            <View style={styles.socialWrapper}>
              <TouchableOpacity
                style={styles.social}
                onPress={() => copyToClipboard(social.gmail)}>
                <IconGmail height={25} width={25} style={styles.socialIcon} />
                <Text style={styles.socialName}>Gmail</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.social}
                onPress={() => copyToClipboard(social.linkedin)}>
                <IconLinkedin
                  height={25}
                  width={25}
                  style={styles.socialIcon}
                />
                <Text style={styles.socialName}>Linkedin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.social}
                onPress={() => copyToClipboard(social.github)}>
                <IconGithub height={25} width={25} style={styles.socialIcon} />
                <Text style={styles.socialName}>Github</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.social}
                onPress={() => copyToClipboard(social.dribbble)}>
                <IconDribbble
                  height={25}
                  width={25}
                  style={styles.socialIcon}
                />
                <Text style={styles.socialName}>Dribbble</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.social}
                onPress={() => copyToClipboard(social.medium)}>
                <IconMedium height={25} width={25} style={styles.socialIcon} />
                <Text style={styles.socialName}>Medium</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.social}>
                <IconInstagram
                  height={25}
                  width={25}
                  style={styles.socialIcon}
                />
                <Text style={styles.socialName}>{social.instagram}</Text>
              </TouchableOpacity> */}
            </View>
            <Text style={styles.version}>- Ver 1.0 -</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.dark,
  },
  body: {
    backgroundColor: colors.background.light,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container: {
    paddingHorizontal: 20,
  },
  profileWrapper: {
    width: 110,
    height: 110,
    borderRadius: 115 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.background.dark,
    alignSelf: 'center',
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: colors.background.dark,
  },
  profileName: {
    fontSize: 18,
    fontFamily: fonts.primary[500],
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  profileJob: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    alignSelf: 'center',
    marginBottom: 20,
  },
  socialWrapper: {
    display: 'flex',
  },
  social: {
    backgroundColor: '#fcfbf7',
    marginVertical: 3,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: 'row',
  },
  version: {
    marginVertical: 20,
    textAlign: 'center',
  },
  socialIcon: {
    marginRight: 15,
  },
  socialName: {
    fontFamily: fonts.primary[600],
  },
});
