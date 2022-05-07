import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import img from './assets/ellipse1.png';
import bell from './assets/bell.png';
import BigX from './assets/Mask.png';
import rectangle2 from './assets/Rectangle2.png';
import rectangle3 from './assets/Rectangle3.png';
import visa from './assets/Visa.png';
import belowCard from './assets/belowCard.png';
import t1 from './assets/t1.png';
import t2 from './assets/t2.png';
import i1 from './assets/i1.png';
import i2 from './assets/i2.png';
import i3 from './assets/i3.png';
import i4 from './assets/i4.png';
import gift from './assets/gift.png';
import { AntDesign } from '@expo/vector-icons';

const Screen1 = () => {
    return (
        <View style={styles.containers}>
            <ScrollView>
                <View style={styles.topView}>
                    <View style={styles.pfp}>
                        <Image source={img} />
                        <View style={{ display: 'flex', marginLeft: 10 }}>
                            <Text style={{ color: '#fff' }}>Welcome Back</Text>
                            <Text style={{ color: '#fff' }}>Jeanne</Text>
                        </View>
                    </View>
                    <View style={styles.notif}>
                        <Image source={bell} />
                    </View>
                </View>
                <View style={styles.topView2}>
                    <Text style={{ color: '#fff' }}>My Card</Text>
                    <Text style={{ color: '#fff' }}>Manage {'>'}</Text>
                </View>
                <View style={styles.card}>
                    <View
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 5,
                            flexDirection: 'column'
                        }}
                    >
                        <ImageBackground
                            source={rectangle2}
                            resizeMode="stretch"
                            style={{
                                flex: 1,
                                paddingHorizontal: 25
                                // transform: [{ rotate: '2.9deg' }]
                            }}
                        >
                            <Image
                                source={BigX}
                                style={{
                                    position: 'absolute',
                                    left: 70,
                                    top: 10,
                                    zIndex: 2
                                }}
                            />
                            <View style={styles.cardTop}>
                                <Image source={visa} />
                                <Text style={{ color: '#fff' }}>18/09</Text>
                            </View>
                            <View style={styles.cardMid}>
                                <Text style={{ color: '#fff', fontSize: 20 }}>
                                    Balance
                                </Text>

                                <Text style={{ color: '#fff', fontSize: 40 }}>
                                    ₹1,432.00
                                </Text>
                            </View>
                            <View style={styles.cardBottom}>
                                <Text style={{ color: '#fff', fontSize: 20 }}>
                                    **** **** **** 5432
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: 200,
                            zIndex: -1,
                            position: 'absolute',
                            borderRadius: 5
                        }}
                    >
                        <ImageBackground
                            source={rectangle3}
                            resizeMode="stretch"
                            style={{ flex: 1 }}
                        ></ImageBackground>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: 200,
                            zIndex: -2,
                            position: 'absolute',
                            borderRadius: 5
                        }}
                    >
                        <ImageBackground
                            source={rectangle2}
                            resizeMode="stretch"
                            style={{ flex: 1 }}
                        ></ImageBackground>
                    </View>
                </View>
                <View style={styles.belowCard}>
                    <Image
                        source={belowCard}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            position: 'absolute',
                            marginLeft: 10
                        }}
                    ></Image>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 30
                        }}
                    >
                        <Text style={{ color: '#fff' }}>Eligible Limit:</Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 20,
                                marginLeft: 5
                            }}
                        >
                            ₹2,800.72
                        </Text>
                    </View>
                    <AntDesign
                        name="right"
                        size={24}
                        color="white"
                        style={{ marginRight: 40 }}
                    />
                </View>
                <View style={styles.transactionIcons}>
                    <View style={styles.singleTransactionIcon}>
                        <Image
                            source={t1}
                            style={{
                                width: '50%'
                            }}
                        ></Image>
                        <Text style={{ color: '#fff', fontSize: 10 }}>
                            Deposit Crypto
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                                fontSize: 10
                            }}
                        >
                            To add limit
                        </Text>
                    </View>
                    <View style={styles.singleTransactionIcon}>
                        <Image
                            source={t2}
                            style={{
                                width: '50%'
                            }}
                        ></Image>
                        <Text style={{ color: '#fff', fontSize: 10 }}>
                            Use Xcoins
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                                fontSize: 10
                            }}
                        >
                            for cashback of Rs. 1000
                        </Text>
                    </View>
                    <View style={styles.singleTransactionIcon}>
                        <Image
                            source={t2}
                            style={{
                                width: '50%'
                            }}
                        ></Image>
                        <Text style={{ color: '#fff', fontSize: 10 }}>
                            Pay ypur Due
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 10,
                                textAlign: 'center'
                            }}
                        >
                            To release locked crypto
                        </Text>
                    </View>
                    <View style={styles.singleTransactionIcon}>
                        <Image
                            source={t1}
                            style={{
                                width: '50%'
                            }}
                        ></Image>
                        <Text style={{ color: '#fff', fontSize: 10 }}>
                            Withdraw Crypto
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                                fontSize: 10
                            }}
                        >
                            To remove limit
                        </Text>
                    </View>
                </View>
                <View style={styles.belowTracsactionIcons}>
                    <Text
                        style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 14,
                            marginBottom: 20
                        }}
                    >
                        Deposit your cryptos to get instant credit limit on the
                        card. Start using your card to earn XCoins @ 5% cashback
                        rate (offer could change in the future)
                    </Text>
                    <Image
                        source={t2}
                        style={{
                            width: '10%'
                        }}
                    ></Image>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>
                        Deposit now
                    </Text>
                </View>
                <View style={styles.myPortfolio}>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly'
                            // alignItems: 'center'
                        }}
                    >
                        <Text style={{ color: '#fff' }}>My Portfolio</Text>
                        <Text style={{ color: '#fff', fontSize: 30 }}>
                            ₹4,001.46
                        </Text>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row'
                                // justifyContent: 'center'
                                // alignItems: 'center'
                            }}
                        >
                            <AntDesign name="caretup" size={22} color="grey" />
                            <Text style={{ color: '#fff', marginLeft: 5 }}>
                                4.32%
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text style={{ color: '#fff' }}>Manage {'>'}</Text>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '50%',
                                marginTop: 10
                            }}
                        >
                            <Image
                                source={i1}
                                style={{
                                    width: '30%'
                                }}
                            ></Image>
                            <Image
                                source={i2}
                                style={{
                                    width: '30%'
                                }}
                            ></Image>
                            <Image
                                source={i3}
                                style={{
                                    width: '30%'
                                }}
                            ></Image>
                            <Image
                                source={i4}
                                style={{
                                    width: '30%'
                                }}
                            ></Image>
                        </View>
                    </View>
                </View>
                <View style={styles.myPortfolio}>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly'
                            // alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row'
                                // justifyContent: 'space-evenly'
                                // alignItems: 'center'
                            }}
                        >
                            <Image source={gift}></Image>
                            <Text style={{ color: '#fff', marginLeft: 5 }}>
                                My Rewards
                            </Text>
                        </View>
                        <Text style={{ color: '#fff', fontSize: 30 }}>
                            0,016xCoin
                        </Text>
                        <Text style={{ color: '#fff' }}> ₹210.06</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text style={{ color: '#fff' }}>All {'>'}</Text>
                        <View
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                borderWidth: 1,
                                borderColor: '#fff',
                                borderRadius: 20,
                                paddingHorizontal: 10,
                                marginTop: 10
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 30 }}>
                                5%
                            </Text>
                            <Text style={{ color: '#fff' }}>
                                Transaction{'\n'} Cashback
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        // width: '100%',
        // height: '100%',
        backgroundColor: '#000000',
        marginVertical: 50
    },
    topView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: 50,
        paddingHorizontal: 15
    },
    pfp: {
        // width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    notif: {
        // width: '30%',
        alignItems: 'center'
    },
    topView2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingHorizontal: 15
    },
    card: {
        flex: 1,
        width: '100%',
        marginTop: 30,
        display: 'flex',
        alignItems: 'center'
    },
    cardTop: {
        width: '100%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardMid: {
        width: '100%',
        marginTop: 10
    },
    cardBottom: {
        width: '100%',
        marginTop: 10
    },
    belowCard: {
        width: '100%',
        border: 15,
        height: '10%',
        position: 'absolute',
        top: 290,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    transactionIcons: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    singleTransactionIcon: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    belowTracsactionIcons: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
    },
    myPortfolio: {
        display: 'flex',
        flex: 1,
        height: '15%',
        width: '85%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        paddingRight: 45,
        alignSelf: 'center',
        marginBottom: 30
    }
});

export default Screen1;
