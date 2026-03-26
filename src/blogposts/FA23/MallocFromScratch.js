import React from "react";
import image1 from "./imgs/MallocFromScratch/image1.png";
import image2 from "./imgs/MallocFromScratch/image2.png";

function MallocFromScratch() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>Malloc from Scratch: Diving into Memory's Secret Keeper</h1>
            <h2>Akanksha Sarkar</h2>
            <h2 className="underline">October 30th, 2023</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            In the vast realm of computer science, few processes are as
            seemingly mysterious and yet fundamentally essential as memory
            allocation. Imagine a backstage pass to a grand orchestra, where
            every musician has their unique place and role. That's what malloc
            does - it's the unsung maestro orchestrating where each byte sits,
            ensuring the symphony of data flows seamlessly. But have you ever
            wondered about the intricacies of this vital function? How does
            malloc weave its magic, especially when working on bare metal, away
            from the safety nets of high-level abstractions? "Bare" with me as I
            explain how C2S2 is building its own bare metal malloc.
          </p>

          <p>
            At its core, malloc stands for memory allocation. In C programming
            and its derivatives, it's a function that reserves a contiguous
            block of memory of a specified size and returns a pointer to the
            initial byte. Think of computer memory as a vast library, and each
            byte as a bookshelf. When you invoke malloc, you're effectively
            asking the librarian (the memory manager) to reserve a certain
            number of these shelves for you. The function then hands you a
            reference card (pointer) indicating the starting point of your
            reserved section.
          </p>

          <figure>
            <img src={image1} />
          </figure>

          <h2>How does a Bare Metal Malloc work?</h2>

          <p>
            The working of Malloc can be divided into these following parts:
          </p>

          <p>
            <strong>Memory Management and Segmentation:</strong> In a computer
            system, memory can be visualized as an expansive linear array of
            bytes. For management purposes, this memory landscape is segmented
            into blocks. Each block holds metadata about its size and whether
            it's currently in use or free.
          </p>

          <p>
            <strong>Linear Search and Allocation:</strong> When a program calls
            malloc, the function embarks on a linear search through these
            blocks. It seeks out a free block that can satisfy the requested
            memory size. The search is generally from the beginning of the
            memory, proceeding block-by-block, assessing the metadata to find a
            fitting vacancy.
          </p>

          <p>
            <strong>Intelligent Memory Optimization:</strong> If malloc locates
            a free block larger than the requested size, it doesn't simply hand
            over the entire block. To prevent wastage, the block is split based
            on the requested size. The surplus memory remains free, primed for
            subsequent allocations, ensuring memory is used judiciously.
          </p>

          <p>
            <strong>Pointer Provision:</strong> Post the allocation and optional
            splitting, malloc doesn't just leave the program guessing where its
            reserved memory starts. It provides a precise address to the
            beginning of the allocated memory block in the form of a pointer,
            serving as a clear reference for the program to access and
            manipulate its newly acquired memory space.
          </p>

          <figure>
            <img src={image2} />
          </figure>

          <p>
            Memory management is not just about allocation; an equally crucial
            aspect is the deallocation of memory. This process is facilitated by
            the free function. When a memory block, previously allocated by
            malloc, is no longer required, it must be returned to the pool of
            available memory to ensure efficient utilization. Not doing so leads
            to what's commonly referred to as a memory leak, where unused memory
            accumulates over time, potentially consuming all available memory
            and causing system slowdowns or crashes.
          </p>

          <p>Upon invocation, the free() function does several things:</p>

          <ol style="display: block; text-align: left;">
            <li>
              <strong>Block Identification:</strong> It first identifies the
              memory block associated with the provided pointer. This often
              involves referencing metadata, or bookkeeping information, that
              was established when the block was initially allocated.
            </li>
            <li>
              <strong>Memory Merging:</strong> One of the significant challenges
              with memory deallocation is fragmentation. Over time, as memory is
              continuously allocated and deallocated, you can end up with a
              landscape of scattered free blocks, interleaved with used ones. To
              address this, once a block is freed, the algorithm checks its
              immediate neighbors. If either or both of the neighboring blocks
              are free, they get merged to form a larger contiguous free block.
              This process is often termed coalescing.
            </li>
          </ol>

          <p>
            There are other steps like updating Metadata, maintaining free lists
            (for faster future allocations), etc.
          </p>

          <p>
            The software team has been working on its own bare metal malloc
            tailored for our custom chip. A big part of the process has been
            analyzing our chip's architecture and the target applications it
            would run. However, building the malloc is just part of the journey.
            We also plan on rigorous testing, where we simulate various
            scenarios, from typical workloads to edge cases, ensuring our
            system's reliability and efficiency. Currently with our high level
            abstraction ready, we are all set to implement the algorithm to get
            our orchestra singing!
          </p>
        </div>
      </section>
    </main>
  );
}

export default MallocFromScratch;
