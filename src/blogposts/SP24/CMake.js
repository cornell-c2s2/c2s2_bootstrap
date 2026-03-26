import React from "react";
import image1 from "./imgs/CMake/image1.png";
import image2 from "./imgs/CMake/image2.png";
import image3 from "./imgs/CMake/image3.png";
import image4 from "./imgs/CMake/image4.png";
import image5 from "./imgs/CMake/image5.png";
import image6 from "./imgs/CMake/image6.png";
import image7 from "./imgs/CMake/image7.png";

function CMake() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>C-Making a Build System</h1>
            <h2>Jack Frank and Aidan McNay</h2>
            <h2 className="underline">April 22, 2024</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            As a software engineer, abstraction is our best friend; limiting the
            scope of where we think about code is the key to productivity, not
            even considering the headache you might get when thinking about all
            the tools that help you in the background. We take this approach
            with our coding languages, but we often also utilize abstraction
            when compiling as well. Instead of manually running hundreds or
            thousands of commands to compile our software, we rely on build
            systems to keep track of our software and compile it for us. On
            C2S2, we use a couple build systems - but which one is best?
          </p>

          <h2>Makefiles</h2>

          <p>
            Makefiles are one of the first build systems to come around and are
            the backbone of many software programs. These are run using the{" "}
            <span className="courier-font">
              <strong>make</strong>
            </span>{" "}
            command, and their popularity is shown by the fact that this command
            is mandated by POSIX (a common standard for operating systems, such
            as Linux and MacOS)
          </p>

          <p>
            Makefiles define how to build objects with rules; you would have a
            rule for each program you want to make. Each rule contains:
          </p>

          <ul style={{ justifyContent: "center" }}>
            <li>A target: The name of what you're trying to make</li>
            <li>
              Any prerequisites: Things we need in order to make our target
            </li>
            <li>
              A recipe: The list of commands that we need to run in order to
              make our target
            </li>
          </ul>

          <p>
            For example, the following code is a rule to build the target{" "}
            <span className="courier-font">
              <strong>hello.c</strong>
            </span>{" "}
            from a prerequisite source file named hello.c using a recipe to
            compile using GCC:
          </p>

          <figure>
            <img src={image1} />
            <figcaption>
              <strong>Figure 1</strong>
            </figcaption>
          </figure>

          <p>
            To see this actually in play, let's consider a "real-life" setup of
            a software project organization! The example below might show how
            our folders are organized; we have our main code in{" "}
            <span className="courier-font">
              <strong>main.cpp</strong>
            </span>
            , and then some source code in the{" "}
            <span className="courier-font">
              <strong>src</strong>
            </span>
            folder, which contains{" "}
            <span className="courier-font">
              <strong>src.hpp</strong>
            </span>{" "}
            and{" "}
            <span className="courier-font">
              <strong>src.cpp</strong>
            </span>{" "}
            (don't worry too much if those file names aren't too familiar - we
            just want to understand how we might compile them)
          </p>

          <figure>
            <img src={image2} />
            <figcaption>
              <strong>Figure 2</strong>
            </figcaption>
          </figure>

          <p>
            If we're compiling these with Makefiles, we might have to have rules
            for how to compile both the code in the
            <span className="courier-font">
              <strong>src</strong>
            </span>{" "}
            folder (for C++, this would compile to a{" "}
            <span className="courier-font">
              <strong>src.o</strong>
            </span>
            ), as well as the main code (into a program named{" "}
            <span className="courier-font">
              <strong>prog</strong>
            </span>
            ) using{" "}
            <span className="courier-font">
              <strong>src.o</strong>
            </span>
            :
          </p>

          <figure>
            <img src={image3} />
            <figcaption>
              <strong>Figure 3</strong>
            </figcaption>
          </figure>

          <p>
            The downside here is that our current system doesn't scale well -
            you'd have to define a whole new rule for every file you add!
            Instead, Makefiles allow us to define pattern rules to specify a
            rule for how to build a specific type of file:
          </p>

          <figure>
            <img src={image4} />
            <figcaption>
              <strong>Figure 4</strong>
            </figcaption>
          </figure>

          <p>
            Here, we specify that{" "}
            <span className="courier-font">
              <strong>prog</strong>
            </span>{" "}
            depends on all of the object files listed in{" "}
            <span className="courier-font">
              <strong>OBJECT_FILES</strong>
            </span>{" "}
            (in this case, only{" "}
            <span className="courier-font">
              <strong>src.o</strong>
            </span>{" "}
            ). Additionally, we use the % wildcard to make a rule for how to
            make any .o file. This gives our Makefile a lot more flexibility and
            avoids repeating rules. We could build our code using the command{" "}
            <span className="courier-font">
              <strong>make prog</strong>
            </span>{" "}
            , which will run the recipe for the{" "}
            <span className="courier-font">
              <strong>prog</strong>
            </span>{" "}
            command (building our program!)
          </p>

          <p>
            However, we still have to specify all of the source files currently
            in{" "}
            <span className="courier-font">
              <strong>OBJECT_FILES</strong>
            </span>
            ; while there are ways around this, they're often confusing and hard
            to understand. We also rely on a very specific organization
            structure (with all of the source files in the src folder); if we
            were to include other folder structures, such as when working with
            other projects, this may not work well.
          </p>

          <h2>CMake</h2>

          <p>
            On the other hand, we could also choose to build our project using
            CMake. CMake is a build system that allows developers to build their
            projects across multiple different environments with only one set of
            files. Additionally, CMake has many other built-in tools that allow
            for further functionality such as cross-platform testing.
          </p>

          <p>
            We can demonstrate this by using the same folder structure as above.
            We begin by creating a file named{" "}
            <span className="courier-font">
              <strong>CMakeLists.txt</strong>
            </span>{" "}
            in the root of the project. All of our CMake code will be written in
            this file. To start, we need to write some boilerplate code that
            will set the CMake version, name the current project, and specify
            the C++ version:
          </p>

          <figure>
            <img src={image5} />
            <figcaption>
              <strong>Figure 5</strong>
            </figcaption>
          </figure>

          <p>
            Next, we need to allow the CMake project to see the{" "}
            <span className="courier-font">
              <strong>src</strong>
            </span>
            folder. To do this, we can create a new{" "}
            <span className="courier-font">
              <strong>CMakeLists.txt</strong>
            </span>
            within the src folder, which contains the line{" "}
            <span className="courier-font">
              <strong>add_library(src src.cpp)</strong>
            </span>
            , to tell CMake that we have a library that our software can use
            named src (including the code in{" "}
            <span className="courier-font">
              <strong>src.cpp</strong>
            </span>
            ) Now, we return to the{" "}
            <span className="courier-font">
              <strong>CMakeLists.txt</strong>
            </span>{" "}
            file in the project root and add the line{" "}
            <span className="courier-font">
              <strong>add_subdirectory(src)</strong>
            </span>{" "}
            which as the name suggests allows the greater CMake project to see
            the src folder (folders are sometimes called "directories") and
            include its files (namely the header file{" "}
            <span className="courier-font">
              <strong>src.hpp</strong>
            </span>
            , as well as our src library code) when compiling.
          </p>

          <p>
            Finally, we can get to creating the program{" "}
            <span className="courier-font">
              <strong>prog</strong>
            </span>{" "}
            which will be used, as seen above, to actually run the code in
            <span className="courier-font">
              <strong>main.cpp</strong>
            </span>
            . To set this up, we have the following code:
          </p>

          <figure>
            <img src={image6} />
            <figcaption>
              <strong>Figure 6</strong>
            </figcaption>
          </figure>

          <p>
            The first thing that happens here is the creation of a new
            executable (another word for "program") called
            <span className="courier-font">
              <strong>prog</strong>
            </span>{" "}
            which is built from the main program in{" "}
            <span className="courier-font">
              <strong>main.cpp</strong>
            </span>
            . We then link the
            <span className="courier-font">
              <strong>src</strong>
            </span>{" "}
            library to this executable, so that it can use the code contained in
            the{" "}
            <span className="courier-font">
              <strong>src</strong>
            </span>{" "}
            folder.
          </p>

          <p>
            Now that we have written our CMake code, we can actually build our
            project! First, we create a new folder called{" "}
            <span className="courier-font">
              <strong>build</strong>
            </span>
            in the main root of our project (CMake actually does not care where
            this{" "}
            <span className="courier-font">
              <strong>build</strong>
            </span>{" "}
            folder is, but by convection, we put it here). Now, we move into the{" "}
            <span className="courier-font">
              <strong>build</strong>
            </span>{" "}
            folder and run the following commands:
          </p>

          <figure>
            <img src={image7} />
            <figcaption>
              <strong>Figure 7</strong>
            </figcaption>
          </figure>

          <p>
            The first command{" "}
            <span className="courier-font">
              <strong>(cmake ..)</strong>
            </span>{" "}
            goes through our CMake files and generates supporting code to help
            build our project (under the hood, it creates a super-complicated
            Makefile to build our code!). Then,{" "}
            <span className="courier-font">
              <strong>make prog</strong>
            </span>{" "}
            will build the program using the generated Makefile, similar to
            before. Now we're finally done, and can run our program, just the
            same as with Makefiles!
          </p>

          <h2>Tradeoffs</h2>

          <p>
            After exploring both CMake and Makefiles, we can come away with some
            concrete tradeoffs that may help to inform you which build system
            may be worth investing in for your project!
          </p>

          <ul>
            <li>
              <strong>Startup Cost:</strong> Makefiles are relatively easy to
              get started with; all you need to specify is the rules you want,
              nothing else! In contrast, CMake requires some boilerplate code to
              get started, including CMake files in sub-folders, increasing the
              barrier between you and your first compilation.
            </li>
            <li>
              <strong>Scalability:</strong> Makefiles may quickly become hard to
              scale; handling complicated folder structures may prove difficult,
              as well as keeping track of different projects and parts of
              compilation. You may also have to edit the Makefile as you add
              more files, adding one more step in your development workflow. In
              contrast, CMake build structures have a variety of commands for
              working with complicated build structures, and can also easily
              integrate with each other, making it relatively easy to include
              other projects that also use CMake. While our example also
              manually specified the files we use for simplicity, CMake also can
              help easily detect the files present in your folders, meaning you
              don't have to edit them every time you add new code.
            </li>
            <li>
              <strong>Syntax:</strong> Lastly, an important attribute of code is
              how understandable it is! The syntax of Makefiles can quickly get
              confusing and isn't necessarily intuitive for others to pick up
              and understand at a glance (looking back at the code above, would
              it have made sense without explanation?). However, CMake makes use
              of intuitive, human-readable function names and code, making it a
              lot easier to tell what's going on at a glance.
            </li>
          </ul>

          <p>
            Because of all of these, Makefiles are best for quick pieces of
            code; if your project is small, and you just want to avoid running a
            few commands over and over again, Makefiles can help automate these
            away. However, if you're starting a large piece of software, it's
            worthwhile to invest in CMake; while it takes a little more to start
            up, its scalability will prove worthwhile overall.
          </p>
        </div>
      </section>
    </main>
  );
}
export default CMake;
