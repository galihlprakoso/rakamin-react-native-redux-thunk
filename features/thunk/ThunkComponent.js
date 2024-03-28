

import React, { useCallback, useEffect } from "react"
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "./thunkSlice";

const ThunkComponent = () => {

  const movies = useSelector((state) => state.thunk.movies);
  const isLoading = useSelector((state) => state.thunk.isLoading);
  const isError = useSelector((state) => state.thunk.isError);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  const renderItem = useCallback(({ item }) => {
    return (
      <Text>
        {item.movie}
      </Text>
    )
  }, [])

  const keyExtractor = useCallback((item) => item.id, [])

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  if (isError) {
    return (
      <View>
        <Text>Data fetching error.</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={
        <View>
          <Text>There is no movies yet.</Text>
        </View>
      }
    />
  )
}

export default ThunkComponent