import React, { FC } from "react";
import { Props } from "../interfaces/Props";
import "../styles/subscription.css";

const SubscriptionsTable: FC<Props> = (props) => {
  const { subscriptions } = props;

  return (
    <div className="subscription-table">
      <table>
        <thead>
          <tr>
            <th>OrderId</th>
            <th>Subscription Name</th>
            <th>Payment Cycle</th>
            <th>Status</th>
            <th>Subscription Start Date</th>
            <th>Subscription End Date</th>
            <th>Trial Subscription End Date</th>
            <th>Next Payment Due Date</th>
            <th>Next Payment Amount</th>
            <th>Action</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={subscription.orderId}>
              <td>{subscription.orderId}</td>
              <td>{subscription.subscriptionName}</td>
              <td>{subscription.paymentCycle}</td>
              <td>
                <span
                  className={
                    subscription.status === "Active" ? "active" : "inactive"
                  }
                >
                  {subscription.status}
                </span>
              </td>

              <td>{subscription.subscriptionStartDate}</td>
              <td>{subscription.subscriptionEndDate}</td>
              <td>{subscription.trialSubscriptionEndDate}</td>
              <td>{subscription.nextPaymentDueDate}</td>
              <td>{subscription.nextPaymentAmount}</td>
              <td>
                <a className="renew-button">Renew</a> |{" "}
                <a className="auto-renew-button">Enable Auto Renew</a> |{" "}
                <a className="upgrade-button">Upgrade</a> |{" "}
                <a className="more-button">
                  More{" "}
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/material-rounded/10/sort-down.png"
                    alt="sort-down"
                  />
                </a>
              </td>
              <td>{subscription.emailAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionsTable;
