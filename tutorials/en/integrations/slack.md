##### In this section

In this section, you'll learn how to sent Notifications to your team on Slack from your Application, whenever an User tries to trigger an event related to his/her activities.

>### Create your first App

>If you haven't signed up for [CloudBoost](https://www.cloudboost.io) yet, this is the right time for you to create your new account and get started. CloudBoost gives you a ton of free tier (check [Pricing](https://www.cloudboost.io/pricing)) so you can build your apps and launch it for free.

# Integrate Slack 

To integrate slack notifications with your application, navigate to <a href="https://dashboard.cloudboost.io">Dashboard</a>, click on <span class="tut-snippet">Manage App</span>.
<img class="settings_img" alt="Your App" src="http://i.imgur.com/PlVMCfC.png">
 After getting redirected to tables screen, follow these steps,

1. Click on the **Settings** on left side navigation of the page, you'll be redirected to the settings page of your application.
<img class="settings_img" alt="Settings Page" src="http://i.imgur.com/yhc0yi5.png">

2. Then, navigate to the **Integrations Tab** using the tab bar on the top of the page.

3. Now, click on the **Setup** corresponding to the Slack Integration,
<img class="settings_img" alt="Slack Settings App" src="http://i.imgur.com/BAN7Zls.png">

4. Now, to add the CloudBoost slack app to your slack team, click on **Add To Slack** Button and *Authorise CloudBoost App* on slack to send notifications to your team.
<img class="settings_img" alt="Authorise Button" src="http://i.imgur.com/LOF5mFG.png">

5. After *Authorising*, you will be redirected to the settings page of your app. Then, go to **Integrations Settings** and click on **Add Button**, (corresponding to Slack) to add an Event corresponding to which you want to get notified on **Slack**.
<img class="settings_img" alt="Authorisations" src="http://i.imgur.com/g5T1Kym.png?1">

6. After clicking on **Add Button**, select the **Event Type** and the **Channel** you want to post this notification on your **Slack**.(In case there are no events, click on the book icon at the top of the page to open **Quick Docs Drawer**, & go to **CloudEvent** section in it and run the code you see in console to add an event and reload the page to see the events added).
<img class="settings_img" alt="Add Event Type" src="http://i.imgur.com/GWFNRA9.png">
<img class="settings_img" alt="Select #channel" src="http://i.imgur.com/Qe78gvL.png">

7. Now, click on **Save Button** to save your settings and start your **Notifications**.(Note: To see a demo notification, after saving the settings re-run the event code again in your console, & you will see the corresponding notification on your channel in slack in quick time).