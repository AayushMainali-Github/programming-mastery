import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MultithreadingAndConcurrency = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Multithreading and Concurrency</div>
        <div className="description">
          Multithreading enables a C++ program to execute multiple tasks simultaneously, improving performance and responsiveness. The C++ Standard Library provides the{" "}
          <code>thread</code> module for creating and managing threads. However, concurrent execution introduces challenges like race conditions and deadlocks, which can be
          mitigated using synchronization mechanisms such as mutexes and condition variables.
        </div>

        <div className="subHeader">Creating and Joining Threads</div>
        <div className="description">
          The <code>std::thread</code> class allows you to create and manage threads. Threads can execute standalone functions, lambda expressions, or member functions.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <thread>
using namespace std;

// Function to be executed in a separate thread
void printMessage() {
    cout << "Hello from a separate thread!" << endl;
}

int main() {
    thread t(printMessage); // Create a new thread
    t.join(); // Wait for the thread to finish execution
    return 0;
}`}</Code>
        <div className="description">
          In this example, the <code>printMessage</code> function runs on a separate thread, and <code>join()</code> ensures that the main thread waits for its completion before
          proceeding.
        </div>

        <div className="subHeader">Using Lambda Functions in Threads</div>
        <div className="description">Lambda functions offer a convenient way to define inline thread functions.</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <thread>
using namespace std;

int main() {
    thread t([]() {
        cout << "Hello from a lambda thread!" << endl;
    });

    t.join(); // Ensure the thread completes before exiting main
    return 0;
}`}</Code>

        <div className="subHeader">Handling Multiple Threads</div>
        <div className="description">You can create multiple threads to execute tasks concurrently.</div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <thread>
using namespace std;

void task(int id) {
    cout << "Thread " << id << " is executing." << endl;
}

int main() {
    thread t1(task, 1);
    thread t2(task, 2);

    t1.join();
    t2.join();

    cout << "Both threads finished execution." << endl;
    return 0;
}`}</Code>
        <div className="description">
          Here, two threads execute the <code>task</code> function simultaneously.
        </div>

        <div className="subHeader">Race Conditions and Synchronization</div>
        <div className="description">
          When multiple threads modify a shared resource concurrently, race conditions may occur. Mutexes (<code>std::mutex</code>) prevent simultaneous access to shared data.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <thread>
#include <mutex>
using namespace std;

mutex mtx; // Mutex for synchronization
int counter = 0;

void increment() {
    mtx.lock();
    counter++;
    cout << "Counter: " << counter << endl;
    mtx.unlock();
}

int main() {
    thread t1(increment);
    thread t2(increment);

    t1.join();
    t2.join();
    
    return 0;
}`}</Code>
        <div className="description">
          The <code>mutex</code> ensures only one thread at a time updates the <code>counter</code> variable, preventing race conditions.
        </div>

        <div className="subHeader">Using std::lock_guard for Automatic Locking</div>
        <div className="description">
          The <code>std::lock_guard</code> automatically locks and unlocks a mutex when it goes out of scope, simplifying thread synchronization.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <thread>
#include <mutex>
using namespace std;

mutex mtx;

void safeIncrement() {
    lock_guard<mutex> lock(mtx);
    static int counter = 0;
    counter++;
    cout << "Counter: " << counter << endl;
}

int main() {
    thread t1(safeIncrement);
    thread t2(safeIncrement);

    t1.join();
    t2.join();
    
    return 0;
}`}</Code>
        <div className="description">
          Using <code>std::lock_guard</code> eliminates the need to manually unlock the mutex.
        </div>

        <div className="subHeader">Using Condition Variables for Thread Synchronization</div>
        <div className="description">
          Condition variables (<code>std::condition_variable</code>) allow threads to wait for specific conditions before proceeding.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
using namespace std;

mutex mtx;
condition_variable cv;
bool ready = false;

void worker() {
    unique_lock<mutex> lock(mtx);
    cv.wait(lock, [] { return ready; });
    cout << "Worker thread proceeding." << endl;
}

int main() {
    thread t(worker);
    
    this_thread::sleep_for(chrono::seconds(2));
    {
        lock_guard<mutex> lock(mtx);
        ready = true;
    }
    cv.notify_one(); // Wake up the worker thread

    t.join();
    return 0;
}`}</Code>
        <div className="description">
          In this example, the worker thread waits until <code>ready</code> is set to <code>true</code> before proceeding.
        </div>

        <div className="subHeader">Using std::future for Asynchronous Execution</div>
        <div className="description">
          The <code>std::future</code> and <code>std::async</code> facilities enable task-based concurrency by allowing asynchronous function execution.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
#include <future>
using namespace std;

int computeSquare(int num) {
    return num * num;
}

int main() {
    future<int> result = async(computeSquare, 5);
    cout << "Square of 5: " << result.get() << endl; // Waits for the task to finish
    return 0;
}`}</Code>
        <div className="description">
          The <code>std::async</code> function runs <code>computeSquare</code> asynchronously, and <code>result.get()</code> retrieves the computed value.
        </div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>
            Always use <code>join()</code> or <code>detach()</code> on threads to avoid undefined behavior.
          </li>
          <li>
            Use <code>std::mutex</code> and <code>std::lock_guard</code> to prevent race conditions when accessing shared data.
          </li>
          <li>
            Use <code>std::condition_variable</code> for efficient thread synchronization instead of busy-waiting.
          </li>
          <li>
            Consider using <code>std::async</code> and <code>std::future</code> for simple asynchronous tasks.
          </li>
          <li>Avoid deadlocks by ensuring threads acquire locks in a consistent order.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Multithreading improves performance by running multiple tasks concurrently.</li>
          <li>
            Synchronization mechanisms, such as <code>std::mutex</code> and <code>std::condition_variable</code>, prevent race conditions and deadlocks.
          </li>
          <li>
            <code>std::async</code> provides a high-level abstraction for asynchronous programming.
          </li>
          <li>Following best practices ensures safe and efficient concurrent execution in C++.</li>
        </ul>

        <Bottom back="/cpp/advanced-file-io" next="/cpp/cpp20-new-features" />
      </div>
    </div>
  );
};

export default MultithreadingAndConcurrency;
