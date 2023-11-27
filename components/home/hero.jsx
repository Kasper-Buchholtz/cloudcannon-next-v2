import Heading from "../heading";
import Image from "next/image";
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function HomeHero( {block, dataBinding}) {
	return (
		<>
        <section className="se-grid">
            <div className="col-span-12">
                <Heading level={2} className="text-giant"> {block.title} </Heading>
            </div>
            <div className="col-span-12">
                <Image className="w-full h-auto" unoptimized={true} src={block.image} alt="Hero Image" width={100} height={100} />
            </div>
        </section>
        </>
	);
}
