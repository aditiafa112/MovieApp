import React from 'react';
import {View} from 'react-native';

interface GapProps {
  height: number;
}

const Gap: React.FC<GapProps> = ({height, width}: any) => {
  return <View style={{height: height, width: width}} />;
};

export default Gap;
