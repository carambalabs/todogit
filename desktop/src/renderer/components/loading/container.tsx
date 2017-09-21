import React from "react"

interface LoadingState {
  isLoading: boolean
}

interface LoadingProps {
  title: string
}

export default class LoadingContainer extends React.Component<LoadingProps, LoadingState> {

  render() {
    return (
      <h1></h1>
    )
  }
}