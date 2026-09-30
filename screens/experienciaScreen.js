import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function ExperienciaScreen() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === 'ended') {
            setPlaying(false);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Experiencia</Text>
            <Text style={styles.subtitle}>Mira este video explicativo</Text>
            
            <View style={styles.videoContainer}>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"XLYKN_zaVeg"}
                    onChangeState={onStateChange}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#94A3B8',
        marginBottom: 24,
        textAlign: 'center',
    },
    videoContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#1E293B',
    },
});
