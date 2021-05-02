plugins {
    kotlin("multiplatform") version "1.5.0-RC"
}

group = "me.noah"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    js(IR) {
        moduleName = "roadrunnerjs"

        useCommonJs()

        browser {
            commonWebpackConfig {
                cssSupport.enabled = false
            }

            webpackTask {
                output.libraryTarget = "commonjs2"
            }
        }

        binaries.executable()
    }

    sourceSets {
        val commonMain by getting
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }
        val jsMain by getting {
            dependencies {
                implementation(npm("mathjs", "9.3.2"))

            }
        }

        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}

tasks {
    named<org.jetbrains.kotlin.gradle.dsl.KotlinJsCompile>("compileKotlinJs").configure {
        kotlinOptions.moduleKind = "commonjs"
    }
}