import Link from "next/link"

import InfoPost from "./InfoPost";

export default function FeaturedPost(){
    return(
        <article>
            <div className="flex -mx-4  lg:items-center items-start flex-wrap">
                <div className="lg:w-8/12 md:w-7/12 w-full px-4">
                    <Link href="/detail">
                        <a>
                            <img src="/featured-thumbnail.png" alt="img" className="rounded-xl w-full mb-4 md:mb-0" />
                        </a>
                    </Link>
                </div>
                <div className="lg:w-4/12 md:w-5/12 w-full px-4">
                    <InfoPost 
                        catagory="UI DESIGN"
                        date="July 2, 2021"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nam rem ab perferendis veritatis amet eaque saepe ducimus, dolores vero aperiam? Dicta aliquam repellat molestias fugit dolor possimus laboriosam non?"
                        authorAvatar="/author-1.png"
                        authorName="Leslie Alexander"
                        authorJob="UI Designer"    
                    />
                </div>
            </div>
            <hr className="border-white/10 mt-10 md:hidden" />
        </article>
    );
}