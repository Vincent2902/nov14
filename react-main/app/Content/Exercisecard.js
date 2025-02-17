import { SafeAreaView,Text,View,ImageBackground,Image,ScrollView} from 'react-native';
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { RecipeContext } from "../../Context/recipeContext";
import { Menustyle } from "../screen/Recipe/menu.style";
import { Card, TextInput,Button,Title,Paragraph} from 'react-native-paper';
import Video from 'react-native-video';
import YoutubeIframe from 'react-native-youtube-iframe';

const ExerciseCard = ({exerciseinformations, exerciseId}) => {
    const navigation = useNavigation();
    const selectedExerciseInformation = exerciseinformations
   

  //handle delete prompt
  return (
    <SafeAreaView style={Menustyle.content}>
    <View>
    <Card >
       </Card>
       <ScrollView>
   <View>
       <Card style={Menustyle.card3}>
       <Card.Content>
       <ScrollView>
    {selectedExerciseInformation ? ( // Check if selectedrecipeinformation exists
      <>
       <YoutubeIframe
       height={300}
videoId={selectedExerciseInformation.videolink}

                    
                      // Set to false to auto-play the video
                      />
    
    <Title style={{ textAlign: 'center', color: 'white' }}>{selectedExerciseInformation.exercise}</Title>
              <Title style={{ textAlign: 'center', color: 'white' }}>Description</Title>
              <Paragraph style={{ color: 'white' }}>{selectedExerciseInformation.description}</Paragraph>
              <Title style={{ textAlign: 'center', color: 'white' }}>Target muscles</Title>
              <Paragraph style={{ color: 'white' }}>{selectedExerciseInformation.muscle}</Paragraph>
              <Title style={{ textAlign: 'center', color: 'white' }}>Steps</Title>
              <Paragraph style={{ color: 'white' }}>{selectedExerciseInformation.steps}</Paragraph>
      
      </>
    ) : (
      <Text>Exercise information not found.</Text>
    )}
  </ScrollView>
 </Card.Content>
       </Card>

   </View>   

   </ScrollView>
    </View>
        
</SafeAreaView>
  );
};

export default ExerciseCard;