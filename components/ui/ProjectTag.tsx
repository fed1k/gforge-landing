interface ProjectTagProps {
    title: string;
}

const ProjectTag = ({ title }: ProjectTagProps) => {
    return (
        <p className="px-3 text-[8px] md:text-xs font-medium text-white py-[7px] rounded-lg border border-white">{title}</p>
    )
}

export default ProjectTag;