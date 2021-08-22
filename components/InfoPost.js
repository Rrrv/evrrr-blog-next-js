import { Fragment } from "react"
import PostAuthor from "./PostAuthor"
import PostMetaTitle from "./PostMetaTitle"

export default function InfoPost({
    catagory,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob
}) {
    return(
        <Fragment>
        <PostMetaTitle catagory={catagory} date={date} title={title} />
        <p className="text-white/60 mt-5 w-10/12">
            {shortDescription}
        </p>
        <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} />
        </Fragment>
    );
}