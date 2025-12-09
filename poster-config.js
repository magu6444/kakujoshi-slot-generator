// ポスターデザイン設定
// 各助詞の組み合わせに対するビジュアルデザインを定義

const posterDesigns = {
    // が + を
    'が_を': {
        bgColor: '#FFE74C',
        textColor: '#FF5733',
        accentColor: '#C70039',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // が + に
    'が_に': {
        bgColor: '#FFFFFF',
        textColor: '#1A237E',
        accentColor: '#3949AB',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // が + で
    'が_で': {
        bgColor: '#76FF03',
        textColor: '#000000',
        accentColor: '#212121',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // が + と
    'が_と': {
        bgColor: '#FF6B9D',
        textColor: '#FFFFFF',
        accentColor: '#C2185B',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // が + へ
    'が_へ': {
        bgColor: '#00BCD4',
        textColor: '#FFFFFF',
        accentColor: '#0097A7',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // を + を
    'を_を': {
        bgColor: '#9C27B0',
        textColor: '#FFFFFF',
        accentColor: '#7B1FA2',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // を + に
    'を_に': {
        bgColor: '#FFC107',
        textColor: '#3E2723',
        accentColor: '#F57C00',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // を + で
    'を_で': {
        bgColor: '#E91E63',
        textColor: '#FFFFFF',
        accentColor: '#AD1457',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // を + と
    'を_と': {
        bgColor: '#4CAF50',
        textColor: '#FFFFFF',
        accentColor: '#2E7D32',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // を + へ
    'を_へ': {
        bgColor: '#FF9800',
        textColor: '#000000',
        accentColor: '#E65100',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // に + が
    'に_が': {
        bgColor: '#3F51B5',
        textColor: '#FFFFFF',
        accentColor: '#1A237E',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // に + を
    'に_を': {
        bgColor: '#CDDC39',
        textColor: '#000000',
        accentColor: '#827717',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // に + に
    'に_に': {
        bgColor: '#00E676',
        textColor: '#000000',
        accentColor: '#00C853',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // に + で
    'に_で': {
        bgColor: '#F44336',
        textColor: '#FFFFFF',
        accentColor: '#B71C1C',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // に + と
    'に_と': {
        bgColor: '#00BCD4',
        textColor: '#000000',
        accentColor: '#006064',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // に + へ
    'に_へ': {
        bgColor: '#FFEB3B',
        textColor: '#000000',
        accentColor: '#F57F17',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // で + が
    'で_が': {
        bgColor: '#9E9E9E',
        textColor: '#FFFFFF',
        accentColor: '#424242',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // で + を
    'で_を': {
        bgColor: '#FF5722',
        textColor: '#FFFFFF',
        accentColor: '#BF360C',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // で + に
    'で_に': {
        bgColor: '#673AB7',
        textColor: '#FFFFFF',
        accentColor: '#4527A0',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // で + で
    'で_で': {
        bgColor: '#8BC34A',
        textColor: '#000000',
        accentColor: '#558B2F',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // で + と
    'で_と': {
        bgColor: '#FF4081',
        textColor: '#FFFFFF',
        accentColor: '#C51162',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // で + へ
    'で_へ': {
        bgColor: '#536DFE',
        textColor: '#FFFFFF',
        accentColor: '#304FFE',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // と + が
    'と_が': {
        bgColor: '#FFF9C4',
        textColor: '#000000',
        accentColor: '#F57F17',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // と + を
    'と_を': {
        bgColor: '#B2DFDB',
        textColor: '#000000',
        accentColor: '#00695C',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // と + に
    'と_に': {
        bgColor: '#FFCCBC',
        textColor: '#000000',
        accentColor: '#BF360C',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // と + で
    'と_で': {
        bgColor: '#CE93D8',
        textColor: '#000000',
        accentColor: '#6A1B9A',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // と + と
    'と_と': {
        bgColor: '#80DEEA',
        textColor: '#000000',
        accentColor: '#00838F',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // と + へ
    'と_へ': {
        bgColor: '#FFAB91',
        textColor: '#000000',
        accentColor: '#D84315',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // へ + が
    'へ_が': {
        bgColor: '#B39DDB',
        textColor: '#FFFFFF',
        accentColor: '#4527A0',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // へ + を
    'へ_を': {
        bgColor: '#81C784',
        textColor: '#000000',
        accentColor: '#2E7D32',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // へ + に
    'へ_に': {
        bgColor: '#FFD54F',
        textColor: '#000000',
        accentColor: '#F57F17',
        fontStyle: 'bold',
        layout: 'stacked'
    },
    // へ + で
    'へ_で': {
        bgColor: '#E57373',
        textColor: '#FFFFFF',
        accentColor: '#C62828',
        fontStyle: 'bold',
        layout: 'centered'
    },
    // へ + と
    'へ_と': {
        bgColor: '#4DD0E1',
        textColor: '#000000',
        accentColor: '#00838F',
        fontStyle: 'bold',
        layout: 'diagonal'
    },
    // へ + へ
    'へ_へ': {
        bgColor: '#AED581',
        textColor: '#000000',
        accentColor: '#558B2F',
        fontStyle: 'bold',
        layout: 'stacked'
    }
};

// デフォルトデザイン（該当する組み合わせがない場合）
const defaultPosterDesign = {
    bgColor: '#FFFFFF',
    textColor: '#000000',
    accentColor: '#666666',
    fontStyle: 'bold',
    layout: 'centered'
};

// ポスターデザインを取得する関数
function getPosterDesign(particle1, particle2) {
    const key = `${particle1}_${particle2}`;
    return posterDesigns[key] || defaultPosterDesign;
}
