import axios from "axios";
import React, { useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = (e) => {
    axios
      .get(
        "https://gps.speedotrack.com/api/cpanel/user?page=1&rows=20&field=email"
      )
      .then(({ data }) => {
        console.log(data);
        setUsers(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={loadUsers}>Load</button>
      <table border="1">
        <thead>
          <tr>
            <th>active</th>
            <th>account_expire</th>
            <th>account_expire_dt</th>
            <th>username</th>
            <th>email</th>
            <th>email_verified</th>
            <th colSpan="3">phone</th>
            <th>user_type</th>
            <th>login_date</th>
            <th>ip</th>
            <th colSpan="4">usage_daily_count</th>
            <th>devices</th>
            <th>coins</th>
            <th>createdAt</th>
          </tr>
          <tr>
            <th colSpan="6"></th>
            <th>country_code</th>
            <th>number</th>
            <th>verified</th>
            <th colSpan="3"></th>
            <th>email</th>
            <th>sms</th>
            <th>webhook</th>
            <th>api</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            console.log("user", user.active);
            return (
              <tr key={index}>
                <td>{user.active.toString()}</td>
                <td>{user.account_expire.toString()}</td>
                <td>{user.account_expire_dt}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.email_verified.toString()}</td>
                <td>{user.phone.country_code}</td>
                <td>{user.phone.number}</td>
                <td>{user.phone.verified.toString()}</td>
                <td>{user.user_type}</td>
                <td>{user.login_date}</td>
                <td>{user.ip}</td>
                <td>{user.usage_daily_count.email}</td>
                <td>{user.usage_daily_count.sms}</td>
                <td>{user.usage_daily_count.webhook}</td>
                <td>{user.usage_daily_count.api}</td>
                <td>{user.devices}</td>
                <td>{user.coins}</td>
                <td>{user.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
