import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { numeroALetras } from '../controllers/controllers';

export default function NumALetrasScreen() {
    const [num, setNum] = useState('');

    const val = parseInt(num, 10);
    const esNumeroValido = !isNaN(val);
    const resultado = esNumeroValido ? numeroALetras(val) : '';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Número a Letras</Text>
            <Text style={styles.subtitle}>Convierte un número (1 - 1000) a texto</Text>

            <TextInput
                style={styles.input}
                placeholder="Número (1 - 1000)"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={num}
                onChangeText={setNum}
            />

            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>En letras:</Text>
                <Text style={styles.resultValue}>{esNumeroValido ? resultado : '—'}</Text>
            </View>
        </View>
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0F172A',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
});