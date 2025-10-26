---
layout: layouts/base.njk
title: "Introduction to Zephyr RTOS for Embedded Systems"
description: "Getting started with Zephyr RTOS - a scalable, open source real-time operating system for embedded devices"
date: 2025-10-24
tags: ["zephyr", "rtos", "embedded", "tutorial"]
---

# Introduction to Zephyr RTOS for Embedded Systems

Zephyr is a small, scalable, open source real-time operating system (RTOS) designed for resource-constrained embedded systems. It's backed by the Linux Foundation and supports a wide range of architectures including ARM, RISC-V, x86, and more.

## Why Zephyr?

- **Open Source**: Apache 2.0 licensed
- **Scalable**: From tiny sensors to complex IoT gateways
- **Multi-architecture**: ARM, RISC-V, x86, ARC, Xtensa, and more
- **Rich Feature Set**: Networking, Bluetooth, USB, filesystems, and more
- **Active Community**: Strong industry and community support

## Key Features

### Hardware Support
- 500+ supported boards
- Multiple architectures (ARM Cortex-M, RISC-V, x86, etc.)
- Extensive peripheral support

### Connectivity
- Full networking stack (IPv4/IPv6, TCP/UDP)
- Bluetooth Low Energy (BLE)
- IEEE 802.15.4 and Thread
- LoRaWAN
- USB device and host support

### Developer-Friendly
- CMake-based build system
- West meta-tool for project management
- Extensive documentation
- Device tree for hardware description

## Setting Up Zephyr

### Install Dependencies (Ubuntu/Debian)

```bash
sudo apt install --no-install-recommends git cmake ninja-build \
    gperf ccache dfu-util device-tree-compiler wget \
    python3-dev python3-pip python3-setuptools python3-tk \
    python3-wheel xz-utils file make gcc gcc-multilib \
    g++-multilib libsdl2-dev libmagic1
```

### Install West and Zephyr SDK

```bash
# Install west
pip3 install --user west

# Initialize workspace
west init ~/zephyrproject
cd ~/zephyrproject
west update

# Install Python dependencies
pip3 install --user -r ~/zephyrproject/zephyr/scripts/requirements.txt

# Download and install Zephyr SDK
cd ~
wget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.16.4/zephyr-sdk-0.16.4_linux-x86_64.tar.xz
tar xvf zephyr-sdk-0.16.4_linux-x86_64.tar.xz
cd zephyr-sdk-0.16.4
./setup.sh
```

## Your First Zephyr Application

### Hello World

```c
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

int main(void)
{
    printk("Hello World from Zephyr! %s\n", CONFIG_BOARD);
    return 0;
}
```

### Build and Run

```bash
# Set up environment
cd ~/zephyrproject/zephyr
source zephyr-env.sh

# Build for QEMU (emulation)
west build -p auto -b qemu_riscv32 samples/hello_world

# Run in QEMU
west build -t run
```

### Build for Real Hardware (e.g., nRF52840)

```bash
west build -p auto -b nrf52840dk_nrf52840 samples/hello_world
west flash
```

## Zephyr on RISC-V

Zephyr has excellent RISC-V support:

```bash
# Build for RISC-V QEMU
west build -b qemu_riscv64 samples/hello_world

# Build for physical RISC-V boards
west build -b hifive1_revb samples/hello_world  # SiFive HiFive1
west build -b litex_vexriscv samples/hello_world  # LiteX VexRiscv
```

## Creating a Blinky Application

```c
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
    if (!gpio_is_ready_dt(&led)) {
        return -1;
    }
    
    gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
    
    while (1) {
        gpio_pin_toggle_dt(&led);
        k_msleep(1000);
    }
    
    return 0;
}
```

## Device Tree Configuration

Zephyr uses device tree to describe hardware:

```dts
/ {
    leds {
        compatible = "gpio-leds";
        led0: led_0 {
            gpios = <&gpio0 13 GPIO_ACTIVE_LOW>;
            label = "Green LED";
        };
    };
};
```

## Next Steps

- Explore Zephyr samples and demos
- Try different boards and architectures
- Implement device drivers
- Build networked applications
- Integrate with RISC-V custom hardware

## Resources

- [Zephyr Project](https://www.zephyrproject.org/)
- [Zephyr Documentation](https://docs.zephyrproject.org/)
- [Zephyr GitHub](https://github.com/zephyrproject-rtos/zephyr)
- [Zephyr Discord Community](https://chat.zephyrproject.org/)

Happy embedded development with Zephyr!

