import Head from "next/head"

import Container from "components/Container";
import Layout from "components/Layout";
import PostAuthor from "components/PostAuthor";
import PostMetaTitle from "components/PostMetaTitle";

export default function Detail() {
    return (
        <Layout>
            <Head>
                <title>Detail &mdash; Evriliano</title>
            </Head>
            <Container>
                <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
                    <PostMetaTitle
                        catagory="UI Design"
                        date="July 2, 2021"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        center
                    />
                    <PostAuthor
                    authorName="Lesilie Alexander"
                    authorJob="UI Designer"
                    authorAvatar="/author-1.png"
                    />
                </div>
                <div className="md:w-10/12 w-full mx-auto my-10">
                    <img src="/detail-image.png" alt="thumbnail" className="w-full rounded-lg" />
                </div>
                <div className="md:w-8/12 w-full mx-auto leading-relaxed">
                    <p className="text-xl mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum exercitationem architecto dicta quos dignissimos ex quae quaerat praesentium. Quos animi dignissimos esse unde laudantium.</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, itaque iure eligendi maiores quaerat, aliquid dignissimos officia soluta voluptate adipisci? Mollitia optio illum, tempore similique aperiam magnam architecto delectus culpa cumque, in quam. Unde distinctio autem excepturi labore commodi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia amet hic ex, neque nisi ipsum optio doloribus aspernatur error ullam placeat quam blanditiis. Dolores aliquam, accusamus nobis veritatis quia, voluptas ducimus nulla rem atque repudiandae iste quod ipsam a perferendis reiciendis itaque, voluptate reprehenderit magni praesentium at saepe eligendi molestias.</p>
                </div>
            </Container>
        </Layout>
    );
}