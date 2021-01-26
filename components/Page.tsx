import Link from "next/link";
import { connect } from "react-redux";
import Clock from "./Clock";
import AddCount from "./AddCount";

const Page = ({ title, linkTo, tick, user }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
      <AddCount />
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
      <ul>
        {user.users.map((u) => (
          <div key={u.id}>{u.email} - {u.name}</div>
        ))}
      </ul>
    </div>
  );
};

export default connect((state) => state)(Page);
