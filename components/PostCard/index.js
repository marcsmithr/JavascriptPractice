import React from 'react'
import { Link } from 'react-router-dom'
import PostLikes from '../../Likes/PostLikes'
import './index.css'

function PostCard({post}) {
    const user = post.user
    const images = post.images

    if(!post||!user) return null
    return (

    )
export default PostCard
