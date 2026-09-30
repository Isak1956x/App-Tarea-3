import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { sumar } from '../controllers/controllers';

export default function SumadoraScreen() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);
    const tieneValores = !isNaN(val1) && !isNaN(val2);
    const resultado = tieneValores ? sumar(val1, val2) : '';

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Sumadora</Text>
                <Text style={styles.subtitle}>Calcula la suma de dos números</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Número 1"
                    placeholderTextColor="#94A3B8"
                    keyboardType="numeric"
                    value={num1}
                    onChangeText={setNum1}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Número 2"
                    placeholderTextColor="#94A3B8"
                    keyboardType="numeric"
                    value={num2}
                    onChangeText={setNum2}
                />

                <View style={styles.resultContainer}>
                    <Text style={styles.resultLabel}>Resultado:</Text>
                    <Text style={styles.resultValue}>{tieneValores ? resultado : '—'}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BBD3EE',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B',
        textAlign: 'center',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        color: '#475569',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#1E293B',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#CBD5E1',
    },
    resultContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        marginTop: 12,
        alignItems: 'center',
    },
    resultLabel: {
        fontSize: 14,
        color: '#64748B',
        marginBottom: 4,
    },
    resultValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0F172A',
    },
});