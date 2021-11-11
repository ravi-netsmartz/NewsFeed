import React, { useState, useEffect } from "react";
import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import styles from "./styles";

const ArticleDetails = (props) => {

    const [article, setArticle] = useState(null);

    useEffect(() => {
        setArticle(props.route.params.item);
    }, []);

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backArrowContainer}
                    onPress={() => props.navigation.goBack()}
                >
                    <Image
                        source={require("../../assets/ic_prev_btn.png")}
                        style={styles.backArrowImage}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Article
                </Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                {renderHeader()}
                <View style={styles.subContainer}>
                    <Text style={styles.text1}>
                        {article && article.title}
                    </Text>
                    <Text style={styles.text2}>
                        {article && article.publishedAt}
                    </Text>
                    <Text style={styles.text2}>
                        {article && article.author}
                    </Text>
                    <Image
                        source={{ uri: article && article.urlToImage }}
                        resizeMode="cover"
                        style={styles.coverImage}
                    />
                    <Text style={styles.text3}>
                        {article && article.description}
                    </Text>
                    <Text style={styles.text3}>
                        {article && article.content}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ArticleDetails;
