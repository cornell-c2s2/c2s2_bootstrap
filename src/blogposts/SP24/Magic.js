import React from "react";
import image1 from "./imgs/Magic/image1.png";
import image2 from "./imgs/Magic/image2.png";
import image3 from "./imgs/Magic/image3.png";
import image4 from "./imgs/Magic/image4.png";
import image5 from "./imgs/Magic/image5.png";
import image6 from "./imgs/Magic/image6.png";
import image7 from "./imgs/Magic/image7.png";
import image8 from "./imgs/Magic/image8.png";
import image9 from "./imgs/Magic/image9.png";
import image10 from "./imgs/Magic/image10.png";
import image11 from "./imgs/Magic/image11.png";
import image12 from "./imgs/Magic/image12.png";
import image13 from "./imgs/Magic/image13.png";
import image14 from "./imgs/Magic/image14.png";
import image15 from "./imgs/Magic/image15.png";
import image16 from "./imgs/Magic/image16.png";
import image17 from "./imgs/Magic/image17.png"
import image18 from "./imgs/Magic/image18.png";


function Magic() {

    return (

        <main id="main">


            <section id="apply" className="breadcrumbs">
                <div className="container">

                    <div className="section-title">
                        <h1>Doing Magic in Magic VLSI</h1>
                        <h2>Thomas Figura</h2>
                        <h2 className="underline">April 24, 2024</h2>
                    </div>

                </div>
            </section>
            <section className="inner-page blog-post">
                <div className="container">

                    <figure>
                        <img src={image1} />
                        <figcaption><strong>Figure 1</strong><br /></figcaption>
                    </figure>

                    <code>http://opencircuitdesign.com/magic/</code>


                    <p>
                        In C2S2 on the Analog Subteam, a key tool that we use in the process of tapping out an IC is a tool called Magic VLSI.
                        Magic VLSI is a layout tool created by John Ousterhout and his graduate students at UC Berkeley in the 1980s. While
                        Ousterhout no longer maintains this project and although it was created almost 40 years ago, Magic VLSI remains a
                        crucial component of Open Source Layouting. Thus in this blog post I will create a Magic Tutorial that will hopefully
                        help you layout and extract your very own integrated Circuit.
                    </p>

                    <figure>
                        <img src={image2} />
                        <figcaption><strong>Figure 2</strong><br /></figcaption>
                    </figure>

                    <p>
                        To begin, Magic is primarily run through the command interface window (CIW) as shown above. With the visual window,
                        shown below, being used for visual inspection. Mouse support for Magic has been added overtime but for most features,
                        the CIW remains king.
                    </p>


                    <figure>
                        <img src={image3} />
                        <figcaption><strong>Figure 3</strong><br /></figcaption>
                    </figure>

                    <p>
                        From this visual interface we can see how Magic looks, firstly we have the window on the right. This window shows which
                        layers are available to you through the loaded PDK, in this case that PDK is Skywater 130. Next at the top of the screen
                        all of the expected tabs plus some new ones are there. In File you can open a magic file, save a magic file, import a
                        spice netlist to generate cells, read and write a GDS file, and close Magic. In Edit, you can manipulate cells through
                        rotation and shifts. In Cell you are able to place instances and move throughout the hierarchy. In Window, you are able
                        to modify the Visual window above. Layers allows you to lock and unlock layer modification. DRC gives you access to drc
                        commands. Options allows you to access more Magic options that for me personally haven't been used. Device 1 & 2, allows
                        you to generate Skywater130 PCells.
                    </p>

                    <p>
                        With that out of the way we will begin with the generation of a simple Magic layout, in this blog post we will be going
                        through a simple CMOS inverter. To begin we first need to set up the Magic environment to be the most helpful. In Magic
                        everything that is done is through the use of the "box", the white outline in the above photo. This box is changed by
                        left and right clicking, where left click moves the bottom left corner and the entire box with it, while right click
                        moves just the top right corner. Thus we run these commands in the CIW to begin:
                    </p>



                    <figure>
                        <img src={image4} />
                        <figcaption><strong>Figure 4</strong><br /></figcaption>
                    </figure>

                    <figure>
                        <img src={image5} />
                        <figcaption><strong>Figure 5</strong><br /></figcaption>
                    </figure>

                    <p>
                        This is done so that we have a visible grid to work with and that our box is locked to said grid. The DRC command is
                        done so that the DRC deck is fully initialized, just in case it is not.
                    </p>

                    <p>
                        From here we are going to create the inverter, from Device 1, we select nmos, then create and close, then away from the
                        created device and do the same with the pmos. From here you will most likely have an image like:
                    </p>

                    <figure>
                        <img src={image6} />
                        <figcaption><strong>Figure 6</strong><br /></figcaption>
                    </figure>

                    <p>
                        Where the cells are not exactly aligned and where you want them. To overcome this you select the cell by hovering over
                        it with your mouse and press I, this selects the cell and allows you to do actions on them. Once the cell is selected
                        you can then press M to move the cell from the bottom left, or you can hold M to drag the cell.
                    </p>

                    <figure>
                        <img src={image7} />
                        <figcaption><strong>Figure 7</strong><br /></figcaption>
                    </figure>

                    <p>
                        Now that we have moved the cells to be more aligned with each other we noticed the big red 12 DRC errors at the top of
                        the screen. Magic in real time checks the layout for any DRC errors, and in this case has spotted that the initial metal
                        layer on the gates is too small. These will be fixed later however.
                    </p>

                    <p>
                        To begin we now connected the transistors in an inverter fashion. Since the transistors are symmetric devices we can
                        just draw a connection across to connect the drain of the nmos to the source of the pmos. We do so by drawing a box overlapping the two vias, and then calling "paint
                        m1" in the below fashion.
                    </p>

                    <figure>
                        <img src={image8} />
                        <figcaption><strong>Figure 8</strong><br /></figcaption>
                    </figure>

                    <figure>
                        <img src={image9} />
                        <figcaption><strong>Figure 9</strong><br /></figcaption>
                    </figure>

                    <p>
                        Now that we have created a wire connection, it is helpful to know how to remove wire connections. Crucially, in the cell
                        hierarchy, lower cells have their layers locked by default, so any action taken to modify the layout will only affect
                        the top level cell. Thus we can call "erase" or "erase x" where x is the specific layer to erase. This will erase what
                        is currently under the white box. Along with this information, another key aspect of drawing your wire connections is
                        making sure that what you are purposefully connecting is not actually shorting to any other net. To check if you are
                        shorting a net you place your mouse over the wire and then repeatedly press "S", this flashes that net and highlights
                        everylayer that is connected to where you pressed "S". Doing this also allows you to check what layers are there by
                        running the command "what" From here we will finish the design of the inverter.
                    </p>

                    <figure>
                        <img src={image10} />
                        <figcaption><strong>Figure 10</strong><br /></figcaption>
                    </figure>

                    <figure>
                        <img src={image11} />
                        <figcaption><strong>Figure 11</strong><br /></figcaption>
                    </figure>

                    <p>
                        As can be seen, the output line of the inverter has been flashed and the "what" command has been run. Along with this we
                        can see that the DRC errors have been fixed as the added m1 layers satisfied the minimum width/area error.
                    </p>

                    <p>
                        While the transistor terminals have been added, the bulk connections have not. To do this we add two vias, one on both sides
                        connecting to the auto generated guard ring. This is done by boxing over the light blue and purple and going to
                        <strong>Device 1</strong> and pressing<strong>mcon</strong>.
                    </p>

                    <figure className="small-figure">
                        <img src={image12} />
                        <figcaption><strong>Figure 12</strong><br /></figcaption>
                    </figure>

                    <figure>
                        <img src={image13} />
                        <figcaption><strong>Figure 13</strong><br /></figcaption>
                    </figure>

                    <p>
                        This connects the bulk to the GND and VDD inputs respectively. Also, depending mcon only drills down from metal1 to the
                        local interconnect layer. The guard ring here is what vias into the bulk.
                    </p>

                    <p>
                        From here we have the wire connections, but for this layout to fully be done we must finish the last step, Layout Versus
                        Schematic. To do this step we need to do three more things, add port labels into Magic, generate the spice netlist, and
                        generate the schematic netlist. For the Magic component we again place the box over the m1 layers and type "label X"
                        where X is the name of the port, and then "port make" to make the label into an actual port. This will make a blue box
                        where the white one was.
                    </p>

                    <figure>
                        <img src={image14} />
                        <figcaption><strong>Figure 14</strong><br /></figcaption>
                    </figure>

                    <figure>
                        <img src={image15} />
                        <figcaption><strong>Figure 15</strong><br /></figcaption>
                    </figure>

                    <p>
                        From here we add all of the ports to the layout and run the Magic extraction, to get the netlist through the following
                        commands:
                    </p>

                    <figure>
                        <img src={image16} />
                        <figcaption><strong>Figure 16</strong><br /></figcaption>
                    </figure>

                    <p>
                        Select top cell, selects the top cell. Extract all, creates an extraction file of the layout which is then used by
                        ext2spice to generate the netlist. "Ext2spice lvs" sets up the ext2spice command to generate a spice netlist in the
                        NGspice format. The final command runs ext2spice and generates the netlist.
                    </p>

                    <p>
                        From here we go to xschem to generate the needed schematic netlist. Once that is done, we open up Netgen and compare the
                        two netlists in the following way:
                    </p>


                    <figure>
                        <img src={image17} />
                        <figcaption><strong>Figure 17</strong><br /></figcaption>
                    </figure>

                    <p>
                        Here the "lvs" command is being called on two spice files demarcated by the curly braces "{ }"". The spice file is listed
                        first and then the subcircuit inside the spice files that you wish to compare. The file path listed above is for my
                        Docker setup and your file path may be different. The final item typed out is the file path to the technology file that
                        actually allows netgen to understand what each item in the netlist is. Once that is typed out and run you should get
                        this:

                    </p>


                    <figure>
                        <img src={image18} />
                        <figcaption><strong>Figure 18</strong><br /></figcaption>
                    </figure>


                    <p>
                        This outputs a detailed report of the LVS command that either tells you the netlists match or that it failed. In this
                        case the netlists match and we did indeed create an inverter. The next step is to then re-extract the layout to run an
                        extracted simulation. Since we set ext2spice up with lvs, that generated spice file has no indication of any resistances
                        or capacitance. Thus we run another set of commands to get the full parasitic extraction. We run:
                    </p>

                    <p>
                        "flatten blog_post_flat
                    </p>
                    <p>
                        load blog_post_flat
                    </p>

                    <p>
                        cellname delete blog_post
                    </p>

                    <p>
                        cellname rename blog_post_flat blog_post
                    </p>

                    <p>
                        select top cell
                    </p>
                    <p>
                        extract do local
                    </p>

                    <p>
                        extract all
                    </p>

                    <p>
                        ext2sim labels on
                    </p>

                    <p>
                        ext2sim
                    </p>

                    <p>
                        extresist tolerance 10
                    </p>

                    <p>
                        extresist
                    </p>

                    <p>
                        ext2spice lvs
                    </p>

                    <p>
                        ext2spice thresh 0
                    </p>

                    <p>
                        ext2spice extresist on
                    </p>

                    <p>
                        ext2spice"
                    </p>

                    <p>
                        These commands runs and produces a parasitic netlist full with resistances and capacitances. This command run requires
                        that the layout be flattened, ie no cell hierarchy, this is not ideal for layouting, so before this command is run, copy
                        and save a non flattened version somewhere else.
                    </p>

                    <p>
                        There it is, a quick tutorial on how to do layout in Magic. As with everything more can be said and be found from
                        Magic's own website found <a href="http://opencircuitdesign.com/magic/">here</a>. I hope the tutorial was helpful and I hope you enjoy
                        your time laying out integrated circuits as the scale goes from 2 transistors to thousands.

                    </p>















                </div>
            </section>

        </main>);
}

export default Magic;