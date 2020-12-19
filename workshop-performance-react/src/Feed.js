import React from "react"
import { Post } from "./Post"
import { SortableContainer } from 'react-sortable-hoc';
import { FixedSizeList as List } from 'react-window';

const VirtualFeed = React.memo(({ posts }) => {
    const renderRow = ({ index, style }) => {
        const post = posts[index]
        return (
            <li key={post.id} style={style}>
                <Post key={index} index={index} post={post} imgStyle={{ maxHeight: 200 }} />    
            </li>
        );
    }
    
    return <ul>
        <List
            itemCount={posts.length}
            itemSize={270}
            width={window.innerWidth}
            height={window.innerHeight}
        >
            {renderRow}
        </List>
    </ul>
})

export const Feed = SortableContainer(VirtualFeed);