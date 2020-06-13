import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section
				className={utilStyles.headingMd}
				style={{ textAlign: "left" }}
			>
				<p>
					Hello, I'm <strong>Tulsi</strong>. I'm a web software
					developer and engineer by passion. I live in{" "}
					<strong>India</strong>. You can contact me on{" "}
					<a href="https://twitter.com/heytulsiprasad">Twitter</a>.
				</p>
				<p>
					This is a my portfolio website - build alongside learning
					the popular React framework, Next.js. You can{" "}
					<a href="https://nextjs.org/learn">learn</a> it too!
				</p>
			</section>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
			>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href="/posts/[id]" as={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

// `context` contains several specific params
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }
