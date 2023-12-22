import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
const TaskManagement = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="flex justify-center items-center mt-24">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="text-center my-3">
                <TabList className='font-bold'>
                    <Tab>To-Do</Tab>
                    <Tab>Ongoing</Tab>
                    <Tab>Completed</Tab>
                </TabList>

                </div>

                <div className="mt-10">
                <TabPanel><h1>to</h1></TabPanel>
                <TabPanel><h1>on</h1></TabPanel>
                <TabPanel><h1>com</h1></TabPanel>
                </div>

            </Tabs>
        </div>
    );
};

export default TaskManagement;