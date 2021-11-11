import React, { useState, useEffect } from "react";

import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    LogBox
} from "react-native";
import styles from "./styles";
import { connect } from 'react-redux';

const categories = [{ title: "All", selected: true }, { title: "business", selected: false }, { title: "entertainment", selected: false }, { title: "general", selected: false }, { title: "health", selected: false }, { title: "science", selected: false }, { title: "sources", selected: false }]

const NewsFeed = (props) => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);
    const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        let params = {
            category: "",
            search: "",
            page: 1
        }
        callApi(params);
    }, []);

    useEffect(() => {
        setNewsFeed(props.newsFeed);
    }, [props.newsFeed])

    const callApi = (params) => {
        props.fetchNewsFeed(params);
    }

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    News Feed
                </Text>
            </View>
        );
    }

    const renderSearch = () => {
        return (
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search here..."
                    style={styles.searchInput}
                    onChangeText={(value) => {
                        setSearch(value);
                        setPage(1);
                        setNewsFeed([]);
                        let params = {
                            category: category,
                            search: value,
                            page: 1
                        }
                        callApi(params);
                    }}
                    value={search}
                />
            </View>
        );
    }

    const renderCategories = () => {
        return (
            <View style={styles.categoriesContainer}>
                <FlatList
                    numColumns={3}
                    data={categories}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={[styles.categoryContainer, { backgroundColor: item.selected ? "#fffa2e" : "#ffffff" }]}
                                onPress={() => {
                                    categories.map((item2) => {
                                        if (item === item2) {
                                            item2.selected = true
                                        } else {
                                            item2.selected = false
                                        }
                                    })
                                    setCategory(item.title);
                                    setPage(1);
                                    let params = {
                                        category: item.title,
                                        search: search,
                                        page: 1
                                    }
                                    if (item.title === "All") {
                                        params.category = ""
                                    }
                                    callApi(params);
                                }}>
                                <Text>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.categorySeperator} />
                        );
                    }}
                />
            </View>
        );
    }

    const renderItem = ({ item }) => {
        let image = (item.urlToImage !== undefined && item.urlToImage) ? { uri: item.urlToImage } : require("../../assets/img_placeholder.png")
        return (
            <TouchableOpacity style={styles.newsItemContainer}
                onPress={() => props.navigation.navigate("artcileDetails", {
                    item
                })}
            >
                <Text style={styles.text1}>
                    {(item.title && item.title !== undefined) ? item.title : ""}
                </Text>
                <Text style={styles.text2}>
                    {(item.publishedAt && item.publishedAt !== undefined) ? item.publishedAt : ""}
                </Text>
                <Image
                    source={image}
                    resizeMode="cover"
                    style={styles.coverImage}
                />
                <TextInput style={styles.text3}
                    editable={false}
                    maxLength={80}
                    value={(item.description && item.description !== undefined) ? item.description : ""}
                />
            </TouchableOpacity>
        );
    }

    const renderFeed = () => {
        return (
            <SafeAreaView style={styles.newsListContainer}>
                {(!props.loadingFeed && newsFeed.length === 0) ? (
                    <Text>
                        No Data Found
                    </Text>) : (
                    <FlatList
                        data={newsFeed}
                        removeClippedSubviews
                        onEndReachedThreshold={0.01}
                        onEndReached={() => {
                            if (!props.loadingFeed && newsFeed.length < props.totalRecords) {
                                let params = {
                                    category: category,
                                    search: search,
                                    page: page + 1
                                }
                                callApi(params);
                                setPage(page + 1);
                            }
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={() => {
                            return (
                                <>
                                    {(props.loadingFeed) ? <ActivityIndicator
                                        size="small"
                                        style={styles.loader}
                                    /> : (!props.loadingFeed && newsFeed.length === props.totalRecords) ? <Text
                                        style={{ alignSelf: 'center', textAlign: 'center', marginTop: 8 }}>
                                        You have reached end!
                                    </Text> : null}
                                </>
                            );
                        }}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.newsSeperator} />
                            );
                        }}
                        renderItem={renderItem}
                    />
                )}
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                {renderHeader()}
                {renderSearch()}
                {renderCategories()}
                {renderFeed()}
            </View>
        </SafeAreaView>

    );
};

const mapStateToProps = (state) => {
    return {
        newsFeed: state.newsFeedReducer.newsFeed,
        loadingFeed: state.newsFeedReducer.loadingFeed,
        totalRecords: state.newsFeedReducer.totalRecords
    };
};

const mapDispatchToProps = (dispatch) => {
    // Action
    return {
        fetchNewsFeed: (search) => {
            dispatch({
                type: 'FETCH_NEWS',
                value: search
            })
        },
    };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);