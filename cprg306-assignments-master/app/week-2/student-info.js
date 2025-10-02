import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2>Student Information</h2>
      <p><strong>Name:</strong> Fatima</p>
      <p>
        <Link href="https://github.com/Fatima1515" target="_blank">
          My GitHub Repository
        </Link>
      </p>
    </div>
  );
}