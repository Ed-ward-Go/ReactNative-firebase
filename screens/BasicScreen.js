import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

const BasicScreen = () => {
  const [text, setText] = React.useState('');

  return (
    <ScrollView>
<View>
<TextInput
      label="Email"
   
      value={text}
      onChangeText={text => setText(text)}
    />
</View>
<View>
<TextInput
      label="Email"
   
      value={text}
      onChangeText={text => setText(text)}
    />
</View>
    </ScrollView>
    


  
    );
};

export default BasicScreen;