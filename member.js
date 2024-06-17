function SkillsMember() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            const skillsResponse = await fetch('http://localhost:3001/skills');
            const skillsData = await skillsResponse.json();
            setSkills(skillsData);
            setLoading(false);
        }
        fetchSkills();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Skills</h1>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
}