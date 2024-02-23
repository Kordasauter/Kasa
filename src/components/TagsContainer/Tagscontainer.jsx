import React from 'react'
import Tag from '../Tag/Tag'
import '../../styles/tagContainer.scss'

function Tagscontainer({ tagList }) {
    return (
        <div className="tagContainer">
            {tagList.map((tag) => (
                <Tag tag={tag} />
            ))}
        </div>
    )
}

export default Tagscontainer
