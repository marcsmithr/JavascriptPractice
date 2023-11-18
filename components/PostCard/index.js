import React from 'react'
import { Link } from 'react-router-dom'
import PostLikes from '../../Likes/PostLikes'
import './index.css'

function PostCard({post}) {
    const user = post.user
    const images = post.images

    if(!post||!user) return null
    return (
        <>
                <div className='post-card-container'>
                        <div className='post-card-likes'>
                            <PostLikes post={post}/>
                        </div>

                    <Link className='post-card-link' to={`/s/${post.community_name}/${post.id}/comments`}>
                        <div className='post-card-main'>
                            
                        </div>
                    </Link>
                </div>
        </>
    )
}
export default PostCard
