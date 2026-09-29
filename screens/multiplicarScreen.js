import { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { multiplicar } from '../controllers/controllers';

export default function MultiplicarScreen() {
    const [num, setNum] = useState('');

    const val = parseFloat(num);
    const esNumeroValido = !isNaN(val);
    const tabla = esNumeroValido ? multiplicar(val) : [];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Tabla de Multiplicar</Text>
            <Text style={styles.subtitle}>Ingresa un número para generar su tabla</Text>

            <TextInput
                style={styles.input}
                placeholder="Número"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={num}
                onChangeText={setNum}
            />

            {esNumeroValido ? (
                <View style={styles.resultContainer}>
                    {tabla.map((item, index) => (
                        <Text key={index} style={styles.itemText}>{item}</Text>
                    ))}
                </View>
            ) : (
                <Text style={styles.placeholderText}>Ingresa un número para ver los resultados.</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#BBD3EE',
        padding: 24,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        color: '#475569',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#1E293B',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#CBD5E1',
    },
    resultContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
    },
    itemText: {
        fontSize: 16,
        color: '#1E293B',
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    placeholderText: {
        fontSize: 14,
        color: '#64748B',
        marginTop: 20,
    },
});