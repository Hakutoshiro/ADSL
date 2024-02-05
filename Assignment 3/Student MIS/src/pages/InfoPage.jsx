export default function InfoPage({ info, role }) {
    if (info) console.log(info)
    return (
        <>
            {info && (
                <div className="ml-10">
                    <p>Name:{role === 'Student' ? info.student_name : info.teacher_name}</p>
                    <p>ID:{role === 'Student' ? info.student_id : info.teacher_id}</p>
                    <p>Email:{info.email}</p>
                    <p>{role === 'Student' ? `Grade:${info.grade}` : `Subject:${info.subject}`}</p>
                </div>
            )}
        </>
    );
}