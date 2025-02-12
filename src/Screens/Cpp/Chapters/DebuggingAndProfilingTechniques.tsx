import React from "react";
import Bottom from "../../../Components/Bottom";
import { Prism as Code } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DebuggingAndProfiling = () => {
  return (
    <div className="screenContainer">
      <div className="screenSubContainer">
        <div className="header">Debugging and Profiling Techniques</div>
        <div className="description">
          Debugging and profiling are essential skills for any C++ developer. Debugging helps identify and fix errors, while profiling enables performance analysis and
          optimization. This chapter covers common debugging strategies, profiling tools, and best practices for improving the performance and stability of your C++ applications.
        </div>

        <div className="subHeader">Debugging with Print Statements</div>
        <div className="description">
          The simplest debugging method involves printing values at different points in the code using <code>std::cout</code>. This helps track program execution and identify
          unexpected behavior.
        </div>
        <Code language="cpp" style={materialDark} showLineNumbers>{`#include <iostream>
using namespace std;

void calculateSum(int a, int b) {
    cout << "Calculating sum of " << a << " and " << b << endl;
    int sum = a + b;
    cout << "Sum: " << sum << endl;
}

int main() {
    calculateSum(10, 20);
    return 0;
}`}</Code>
        <div className="description">While useful for quick debugging, excessive print statements can clutter output and make debugging harder in large projects.</div>

        <div className="subHeader">Using a Debugger (GDB, LLDB, Visual Studio Debugger)</div>
        <div className="description">
          Debuggers allow you to step through code, inspect variable values, and analyze call stacks without modifying the program. Here’s how to use <b>GDB (GNU Debugger)</b> to
          debug a C++ program:
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`g++ -g program.cpp -o program
gdb program`}</Code>
        <Code language="bash" style={materialDark} showLineNumbers>{`(gdb) break main    # Set a breakpoint at main function
(gdb) run           # Run the program
(gdb) next          # Execute the next line of code
(gdb) print var     # Inspect the value of a variable
(gdb) backtrace     # Display the call stack
(gdb) continue      # Resume execution
(gdb) quit          # Exit the debugger`}</Code>
        <div className="description">Debugging tools such as LLDB (for macOS) and the Visual Studio Debugger offer graphical interfaces and enhanced debugging capabilities.</div>

        <div className="subHeader">Common Debugging Techniques</div>
        <ul className="list">
          <li>
            <b>Breakpoint Debugging</b>: Pause execution at specific points to examine variable states.
          </li>
          <li>
            <b>Step Over</b>: Execute the next line of code without stepping into function calls.
          </li>
          <li>
            <b>Step Into</b>: Enter function calls to inspect their execution.
          </li>
          <li>
            <b>Watch Variables</b>: Monitor variable values in real-time during execution.
          </li>
          <li>
            <b>Core Dumps</b>: Analyze crashes using core dump files to determine the cause of segmentation faults.
          </li>
        </ul>

        <div className="subHeader">Memory Debugging with Valgrind</div>
        <div className="description">
          Memory leaks and invalid memory accesses can degrade performance and cause crashes. <b>Valgrind</b> is a powerful tool for detecting memory issues.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`g++ -g program.cpp -o program
valgrind --leak-check=full ./program`}</Code>
        <div className="description">Valgrind reports memory leaks, uninitialized memory reads, and invalid accesses, helping identify and fix memory-related bugs.</div>

        <div className="subHeader">Profiling with gprof</div>
        <div className="description">
          Profiling helps identify performance bottlenecks by analyzing CPU time spent in functions. <b>gprof</b> provides execution time statistics for each function.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`g++ -pg program.cpp -o program
./program
gprof program gmon.out > profile.txt`}</Code>
        <div className="description">
          The generated <code>profile.txt</code> file lists function call frequencies and execution times, revealing inefficient code sections.
        </div>

        <div className="subHeader">Using Perf for Performance Analysis</div>
        <div className="description">
          Linux’s <b>perf</b> tool provides in-depth profiling by sampling CPU events and identifying costly functions.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`g++ -O2 program.cpp -o program
perf record ./program
perf report`}</Code>
        <div className="description">
          The <code>perf report</code> command visualizes performance metrics, aiding optimization efforts.
        </div>

        <div className="subHeader">Using AddressSanitizer for Runtime Error Detection</div>
        <div className="description">
          <b>AddressSanitizer</b> detects memory issues, including buffer overflows and use-after-free errors.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`g++ -fsanitize=address -g program.cpp -o program
./program`}</Code>
        <div className="description">AddressSanitizer provides real-time error messages, making it a valuable debugging tool for C++ applications.</div>

        <div className="subHeader">Debugging Multi-Threaded Programs</div>
        <div className="description">
          Debugging concurrency issues requires specialized tools such as <b>ThreadSanitizer</b>, which detects race conditions and data races.
        </div>
        <Code language="bash" style={materialDark} showLineNumbers>{`g++ -fsanitize=thread -g program.cpp -o program
./program`}</Code>
        <div className="description">ThreadSanitizer highlights problematic thread interactions, making concurrent debugging more manageable.</div>

        <div className="subHeader">Best Practices</div>
        <ul className="list">
          <li>Use a debugger (GDB, LLDB, or Visual Studio Debugger) to step through code and identify issues efficiently.</li>
          <li>Employ memory analysis tools like Valgrind and AddressSanitizer to detect leaks and invalid memory accesses.</li>
          <li>Profile performance using gprof, perf, or built-in profiling tools to optimize execution speed.</li>
          <li>Use thread analysis tools like ThreadSanitizer for detecting race conditions in multithreaded programs.</li>
          <li>Adopt systematic debugging techniques, such as binary search debugging, where you strategically place breakpoints to isolate errors.</li>
        </ul>

        <div className="subHeader">Key Takeaways</div>
        <ul className="list">
          <li>Debugging tools like GDB, LLDB, and Visual Studio Debugger help analyze and fix runtime errors efficiently.</li>
          <li>Memory analysis tools such as Valgrind and AddressSanitizer detect leaks and memory corruption issues.</li>
          <li>Profiling tools like gprof and perf help identify slow-performing code sections for optimization.</li>
          <li>Using systematic debugging techniques leads to faster issue resolution and more stable applications.</li>
        </ul>

        <Bottom back="/cpp/multithreading-and-concurrency" next="/cpp/cpp20-new-features" />
      </div>
    </div>
  );
};

export default DebuggingAndProfiling;
