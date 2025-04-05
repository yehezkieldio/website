import MdxAnchor from "#/components/mdx/elements/mdx-anchor.astro";
import MdxBlockquote from "#/components/mdx/elements/mdx-blockquote.astro";
import MdxListItem from "#/components/mdx/elements/mdx-list-item.astro";
import MdxOrderedList from "#/components/mdx/elements/mdx-ordered-list.astro";
import MdxTableData from "#/components/mdx/elements/mdx-table-data.astro";
import MdxTableHeader from "#/components/mdx/elements/mdx-table-header.astro";
import MdxTable from "#/components/mdx/elements/mdx-table.astro";
import MdxUnorderedList from "#/components/mdx/elements/mdx-unordered-list.astro";

export const mdxComponents = {
    blockquote: MdxBlockquote,
    a: MdxAnchor,
    table: MdxTable,
    th: MdxTableHeader,
    td: MdxTableData,
    ol: MdxOrderedList,
    ul: MdxUnorderedList,
    li: MdxListItem
};
